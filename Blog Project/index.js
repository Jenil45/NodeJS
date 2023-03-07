const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname , "static")));
app.use('/' , require(path.join(__dirname , './routes/blog')));         // directory and file joins
app.use('/blogs' , require(path.join(__dirname , './routes/blog')));         // directory and file joins
app.use('/blogPost' , require(path.join(__dirname , './routes/blog')));         // directory and file joins
app.listen(port , ()=>
{
    console.log(`App running on ${port}`);
})


console.log("This is index.js");
