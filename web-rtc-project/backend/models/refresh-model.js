import mongoose from "mongoose";
import User from "./user-model";

const Schema = mongoose.Schema;

const refreshSchema = new Schema({
    token : {
        type : String,
        required : true
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : User
    }
},{timestamps:true})

const Refresh = mongoose.models.tokens || mongoose.model('tokens' , refreshSchema);

export default Refresh;