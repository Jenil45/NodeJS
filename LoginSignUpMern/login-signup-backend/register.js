import mongoose from 'mongoose'

const registerSchema = new mongoose.Schema({

    name : {
        type : String ,
        required : true
    }, 
    
    email : {
        type : String ,
        required : true,
        unique : true
    },
    
    password : {
        type : String ,
        required : true
    },

    cpassword : {
        type : String ,
        required : true
    },

})



// now we create a model

const Register = new mongoose.model("Register" , registerSchema);

module.exports = {Register}