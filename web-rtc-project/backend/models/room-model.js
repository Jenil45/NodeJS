import mongoose from "mongoose";
import User from "./user-model";

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    topic : {
        type : String,
        required : true
    },
    roomType : {
        type : String,
        required : true
    },
    ownerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : User
    },
    speakers : {
        type : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : User
            }
        ],
        required : false
    }
},{timestamps:true})

const Room = mongoose.models.rooms || mongoose.model('rooms' , roomSchema);

export default Room;