const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcryptjs');
 
// connection establishmnent with mongodb
require("./src/db/conn")

// making a register schema
const Register = require('./src/models/registers');

// using different folders of public and static
const static_path = path.join(__dirname , '../public');
app.use(express.static(static_path));

// setting template engine
app.set("view engine" , "pug");
app.set('/views' , path.join(__dirname , '../views'))

// make our code JSON user freindly
app.use(express.json());
app.use(express.urlencoded({extended : false}))

// making secure password
const securePassword = async (password) => {

    const passwordHash = await bcrypt.hash(password , 10);   // bcrypt.hash(*password* , round);
    return passwordHash;
}

// provide code for different requests
app.get("/" , (req , res)=>{
    res.render("index");
})

app.get("/login" , (req , res)=>{
    res.render("login");
})

app.post("/contact" , async (req,res)=>{

    try {
        const password = await securePassword(req.body.password);
        const cpassword = req.body.cpassword;


        if(await bcrypt.hash(cpassword , password))
        {
            const registerPerson = new Register({
                firstname : req.body.fname,
                lastname : req.body.lname,
                email : req.body.email,
                phoneno : req.body.phoneno,
                age : req.body.age,
                password : password,
                confirmpassword : password
            })

            // creating a token or cookie
            const token = await registerPerson.generateAuthToken();

            // store token in cookie
            res.cookie("jwt" , token , {
                expires : new Date(Date.now() + 60000),
                httpOnly : true
                // also use secure : true but it only works in https
            })

            const registered = registerPerson.save();
            res.status(201).render("login");
        }

        else
        {
            res.send("Password aren't matched")
        }

    } catch (error) {
        res.status(400).send(error)
    }
})

app.post("/login" , async (req , res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;

        const myData = await Register.findOne({email : email});

        // creating a token or cookie
        const token = await myData.generateAuthToken();
        console.log(token)

        if(await bcrypt.compare(password , myData.password))
        {
            res.status(201).render("home");
        }

        else
        {
            res.status(400).send("The password and email are wrong")
        }

    } 
    catch (error) {
        console.log(error);    
    }
})

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000.")
});