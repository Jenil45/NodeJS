const path = require("path")
const fs = require("fs")
const express = require("express");
const app = express();
const multer = require("multer");
const upload = require('./upload');
const { fields } = require("./upload");

app.set("view engine" , "pug")
app.set('/views' , path.join(__dirname , '/views'))

app.get("/" , (req , res) => {
    res.render("index");
})

app.post("/profile" , upload.fields([{name : 'image_upload'} , {name : 'resume_upload'}]) , (req , res) => {
    // console.log(req.fields())
    // console.log(req.files({fieldname : "resume_upload"}))

    // if(req.files)
    // {
    //     req.files.forEach(function (file , index , arr) {
    //         console.log(file.path)
    //     })
    // }

    console.log(req.files['resume_upload'][0].filename)
    console.log(req.files['image_upload'][0].filename)
})

app.listen(3000 , () => {
    console.log("App listen on port 3000")
})