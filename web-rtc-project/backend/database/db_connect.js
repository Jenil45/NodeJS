import mongoose from "mongoose";
import { DB_URL } from "../config";

const DBConnect = async() =>
{
    await mongoose.connect(`${DB_URL}` , {}).then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log("Can't connect to db" , err);
    })
}


export default DBConnect