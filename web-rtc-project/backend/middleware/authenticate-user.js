import tokenService from "../services/token-service";

export const authenticateUser = async (req , res , next) => {
    try {

        // fetch token from cookie
        const {accessToken} = req.cookies;
        if (!accessToken) {
            throw new Error()
        }

        // find user data from access token by verify it
        const userData = await tokenService.verifyToken(accessToken);
        if(!userData)
        {
            throw new Error();
        }

        // storing the data
        req.user = userData;
        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({message : 'Invalid token'})
    }

}