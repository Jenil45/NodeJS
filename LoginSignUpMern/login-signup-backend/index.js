// const express = require('express')
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// connection establishmnent with mongodb
// require("./src/db/conn")
import './conn.js'

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


// routes
app.get("/" , (req , res) =>{
    res.send("MY API")
})

app.post("/login" , async (req , res) => {

    // login code 
    try {
        const {email , password} = req.body;
        console.log(email);
        console.log(password);

        const myLoginData = await Register.findOne({email : req.body.email});
        console.log(myLoginData)

        if(await myLoginData)
            {
                if(password===myLoginData.password)
                {
                    res.send({message : "Login Successful" , myLoginData})
                }
                else
                {
                    res.send({message : "Invalid password"})
                }
            }
        else
        {
            res.send({message : "User doesn't exist"})
        }
        

    } catch (error) {
        
    }

})


app.post("/signup" , async (req , res) => {

    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        const registerUser = new Register({
            name : name ,
            email : email ,
            password : password ,
            cpassword : cpassword 
        })

        const registered = registerUser.save()
        res.status(200).send({message : "Successful"})

    } catch (error) {
        
    }
    
})


app.listen(8000 , ()=> {
    console.log("App started successfully on port 8000")
});