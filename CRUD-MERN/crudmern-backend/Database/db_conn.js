import mongoose from 'mongoose'

console.log("Welcome to mongoose");

const Connection = async () =>
{
    await mongoose.connect("mongodb://localhost:27017/mernPlayerData").then(() => {
        console.log("Connection with database successfully");
    }).catch(() => {
        console.log("Connection failed!!!");
    })
}

export default Connection