import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    phone : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : false
    },
    profile : {
        type : String,
        required : false
    },
    activated : {
        type : Boolean,
        default : false
    }
},{timestamps:true})

const User = mongoose.models.users || mongoose.model('users' , userSchema);

export default User;