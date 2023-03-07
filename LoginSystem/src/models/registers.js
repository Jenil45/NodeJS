const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const registerSchema = new mongoose.Schema({

    firstname : {
        type : String ,
        required : true
    }, 
    lastname : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        required : true,
        unique : true
    },
    phoneno : {
        type : String ,
        required : true,
        unique : true
    },
    age : {
        type : String ,
        required : true
    },
    password : {
        type : String ,
        required : true
    },
    confirmpassword : {
        type : String ,
        required : true
    },

    tokens : [{
        token : {
            type : String ,
            required : true
        }
    }]
})

// creating a web token
registerSchema.methods.generateAuthToken = async function(whichToken){

    try {
        
        const token = jwt.sign({_id : this._id.toString()} , "mynameisjenilkamleshbhaithakoris");   // jwt.sign(id , secret key)

        this.tokens = this.tokens.concat({token : whichToken + " : " + token});
        await this.save()


        return token;
    } catch (error) {
        
        res.send("Error part " + error);
        console.log("Error part " + error);
    }
}


// now we create a model

const Register = new mongoose.model("Register" , registerSchema);

module.exports = Register