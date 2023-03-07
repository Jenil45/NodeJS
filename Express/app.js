const express = require('express')
const path = require('path')
const fs = require('fs')
const readline = require('readline')

// making an app of express
const app = express()

// for serving static file
app.use('/static' , express.static('static'))
app.use(express.urlencoded())
// setting template as pug
app.set('view engine' , 'pug')

// set view directory
app.set('views' , path.join(__dirname ,'views'))

app.get("/home" , (req , res)=>{
    const msg = "hello how are you";
    res.status(200).render('index' , {"title" : "This is html in pug" , "message" : msg})
})


app.post("/" , (req , res)=>{
    fname = req.body.fname;
    lname = req.body.lname;
    age = req.body.age;
    desc = req.body.desc;
    
    entrySubmit = `The name of your client is ${fname} ${lname} \n The age of client is ${age} \n The description of him ${desc} \n`

    fs.appendFileSync("databse.txt" , entrySubmit)
    res.status(200).render('index' , {"message" : "Your form has been successfully submitted"})
})

app.get("/info" , (req , res)=>{

    const fileRead = fs.readFileSync('databse.txt' , 'utf-8')
    // const data = readline.createInterface({
    //     input : fileRead,
    //     crlfDelay : Infinity
    // })
    // console.log(data)
    // console.log(fs.readFileSync('databse.txt' , 'utf-8'))
    // array.forEach(element => {
        
    // });

    fileRead.split('.').forEach(element => {

        res.render('info' )
        // res.status(200).render('info' , {infocard : `<div class='card' style='width : 18rem'>`+
        element.split('|').forEach(data => {
            // `<div class='card-body'><h5>${data}</h5></div></div>`
            console.log(data)
        })
    // });
    })    
})



// // our pug demo endpoint
// app.get('/demo' , (req , res)=>{
//     res.status(200).render('demo' , {title : "Jenil" , message:"Hey there is a Earthquake"})
// })

// // using express app we can use GET POST PUT DELETE UPDATE methods
// app.get("/" , (req , res) => {
//     res.send("This is my first express app")
// })

// app.get("/about" , (req , res) => {
//     res.send("This is my first about page in express app")
// })


// app listening on some port
app.listen(8000 , ()=> {
    console.log("App started successfully on port 8000")
});
