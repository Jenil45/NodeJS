import User from "../models/user-model";
import hashService from "../services/hash-service";
import otpService from "../services/otp-service";
import tokenService from "../services/token-service";
import userService from "../services/user-service";

class AuthController
{
    async sendOtp(req , res)
    {
        // logic
        const {phone} = req.body;
        if(!phone)
        {
            return res.status(400).json({message : "Phone field required"})
        }
        
        // generating otp
        const otp = otpService.generateOtp();

        // hash otp
        const timeExpiryOtp = 1000 * 60 * 2 * 10; // 2 minutes
        const expire = Date.now() + timeExpiryOtp;
        const data = `${phone}.${otp}.${expire}`;

        const hash = hashService.hashOtp(data);

        // send otp in messages
        try {
            // await otpService.sendOtpSms(phone , otp);
            // here we sent expire time because we want to check at verify that otp is expire or not
            return res.json({
                hash : `${hash}.${expire}`,
                phone ,
                otp
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({message : 'Otp cant sent'})
        }
    }

    async verifyOtp(req , res)
    {
        // logic
        const {otp , hash , phone} = req.body;
        if(!otp || !hash || !phone)
        {
            return res.status(400).json({message : "All field required."})
        }

        const [hashedOtp , expire] = hash.split('.');
        // check the otp timer
        if(Date.now() > +expire)
        {
            return res.status(400).json({message : 'Otp expires'});
        }
        // validated hashed data
        const data = `${phone}.${otp}.${expire}`;
        const valid = otpService.verifyOtp(hashedOtp , data)
        
        if (!valid) {
            return res.status(400).json({message : "Invalid otp"})
        }
        
        // login user
        let user;
        
        try {
            user = await userService.findUser(phone);
            if (!user) {

                user = await userService.createUser(phone)
            }
        } catch (error) {
            return res.status(500).json({"message" : "DB error"})
        }
        
        // generate token for authentication
        const tokens = tokenService.generateToken({_id : user._id , activated : user.activated})
        const accessToken = tokens.accessToken;
        const refreshToken = tokens.refreshToken;
        
        // we can track refreshToken of user by keep their record in database
        await tokenService.storeRefreshToken(refreshToken , user._id); 


        // we store access token on client and refreshtoken on cookie
        res.cookie('refreshtoken' , refreshToken , {
            maxAge : 1000 * 60 * 24 * 30 , 
            httpOnly : true
        })

        // adding access token in cookie bcz it can't safe in localstorage
        res.cookie('accessToken' , accessToken , {
            maxAge : 1000 * 60 * 24 * 30 , 
            httpOnly : true
        })

        res.json({ user , auth : true});
    }

    async refresh(req , res)
    {
        // get refresh token from cookies
        const tokens = req.cookies;
        const refreshCookie = tokens.refreshtoken;

        // check if the token is valid or not
        let userDataOfRfresh;
        try {
            userDataOfRfresh = await tokenService.verifyRefreshToken(refreshCookie);
        } catch (error) {
            return res.status(401).json({message : 'Invalid token'});
        }

        // check if the token is in db
        try {
            const token = await tokenService.findRefreshToken(refreshCookie , userDataOfRfresh._id);
            if(!token)
            {
                return res.status(401).json({message : 'Invalid token'});
            }
        } catch (error) {
            return res.status(500).json({message : 'Internal error'});
        }
        
        // check if the user is valid or not 
        let user;
        try {
            user = await User.findOne({_id : userDataOfRfresh._id});
            if(!user)
            {
                return res.status(404).json({message : 'User not found'});
            }
        } catch (error) {
            return res.status(500).json({message : 'Internal error'});
        }
        
        // generate new tokens
        const {accessToken , refreshToken} = tokenService.generateToken({_id : user._id , activated : user.activated});

        // update refresh token in db
        try {
            await tokenService.updateRefreshToken(refreshToken , user._id)
        } catch (error) {
            return res.status(500).json({message : 'Internal error'});
        }

        // we store access token on client and refreshtoken on cookie
        res.cookie('refreshtoken' , refreshToken , {
            maxAge : 1000 * 60 * 24 * 30 , 
            httpOnly : true
        })
        
        // adding access token in cookie bcz it can't safe in localstorage
        res.cookie('accessToken' , accessToken , {
            maxAge : 1000 * 60 * 24 * 30 , 
            httpOnly : true
        })
        
        res.json({user , auth : true});
    }

    async logoutUser(req , res)
    {
        const {refreshtoken} = req.cookies;

        // delete refresh token from database
        await tokenService.removeToken()

        // remove cookies
        res.clearCookie('refreshtoken')
        res.clearCookie('accessToken')

        res.json({user:null , auth : null})
    }
}

export default new AuthController();