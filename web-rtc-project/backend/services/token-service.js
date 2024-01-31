import jwt from "jsonwebtoken";
import { ACCESS_SECRET, REFRESH_SECRET } from "../config";
import Refresh from "../models/refresh-model";

class TokenService
{
    generateToken(payload)
    {
        const accessToken = jwt.sign(payload , ACCESS_SECRET , {expiresIn : '10m'} );
        const refreshToken = jwt.sign(payload , REFRESH_SECRET , {expiresIn : '1y'});
        return {accessToken , refreshToken};
    }

    async storeRefreshToken(refreshtoken , userId)
    {
        try {
            const token = new Refresh({
                token : refreshtoken ,
                userId : userId
            })

            const result = await token.save();
            return result;
             
        } catch (error) {
            console.log(error.message);
        }
    }
    async updateRefreshToken(refreshtoken , userId)
    {
            return await Refresh.updateOne({
                userId : userId
            },{token : refreshtoken});
    }

    async findRefreshToken(refreshtoken , userId)
    {
        return await Refresh.findOne({userId : userId , token : refreshtoken})
    }

    async verifyToken(token)
    {
        return await jwt.verify(token , ACCESS_SECRET);
    }
    async verifyRefreshToken(token)
    {
        return await jwt.verify(token , REFRESH_SECRET);
    }

    async removeToken(refreshToken)
    {
        return await Refresh.deleteOne({token : refreshToken});
    }
}

export default new TokenService();