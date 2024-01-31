import Jimp from "jimp";
import path from "path";
import userService from "../services/user-service";
import { SERVER_URL } from "../config";
import User from "../models/user-model";

class ActivateController
{
    async activateUser(req , res)
    {
        // acces upcoming data of profile and user name
        const {name , avatar} = req.body;

        if (!name || !avatar) {
            return res.status(400).json({message : "All field require"})
        }

        // converting upcoming image into buffer because it's in base64 hash
        const buffer = Buffer.from(avatar.replace(/^data:image\/(png|jpeg|jpg);base64,/ , '') , 'base64');
        const imageName = `${Date.now()}-${Math.random(Math.random()*1e9)}.png`;

        //  now compressing the image using jimp package
        try {
            const jimpRes = await Jimp.read(buffer);
            jimpRes.resize(150 , Jimp.AUTO).write(path.resolve(__dirname , `../storage/${imageName}`))
        } catch (error) {
            return res.status(500).json({message : "Can't process image"})
        }

        // storing information to database and do activated=true
        const userId = req.user._id;
        
        //  finding the user in database
        try {
            
            const user = await userService.findUserById({_id : userId});
            if(!user)
            {
                return res.status(404).json("user not found");
            }
            
            //  updating the user info
            let userUpdate;
            try {
                userUpdate = await User.updateOne({_id : userId} , {activated : true , name : name , profile : `${SERVER_URL}/storage/${imageName}`})
            } catch (error) {
                return res.status(500).json({message : "Can not update user properly"})
            }
            res.json({user : user , auth : true})
        } catch (error) {
            return res.staus(404).json({message : "Something went wrong."})
        }
    }
}

export default new ActivateController();