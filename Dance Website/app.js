const fs = require('fs')
const express = require('express')
const path = require('path')
//mongoose connection
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


// define schema for dance database
const contactSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    address: String,
    desc: String

  });   

// convert schema into model
const Contact = mongoose.model('dcontact', contactSchema);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/contactDance'); 
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// making app of express
const app = express()

// for serving static file
app.use('/static' , express.static('static'))
 
// for serving template engine
app.set('view engine' , 'pug')
app.set('/views' , path.join(__dirname , 'views'))

// app.get("/home" , (req , res)=>{
//     res.status(200).render('index' , {"message" : "Successfully content get"})
// })

app.get("/home" , (req , res)=>{
    const msg = "hello how are you";
    res.status(200).render('home' , {"title" : "This is html in pug" , "message" : msg})
})

app.get("/contact" , (req , res)=>{
    const msg = "hello how are you";
    res.status(200).render('contact' , {"title" : "This is html in pug" , "message" : msg})
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/contact" , (req , res)=>{

    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("Your data entered successfully");
    }).catch(()=>{
        res.status(400).send("Error occured")
    })
});

app.listen(80 , ()=>{
    console.log("App successfully listen on port 80")
})
