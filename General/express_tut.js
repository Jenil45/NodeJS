// Express is a Web Application Framework
const express = require('express');
const app = express();
const port = 3000;

app.get('/' , (req , res)=> {
    res.send('Hello world');
})

app.get('/about' , (req , res)=> {
    res.send('About Hello world');
})

app.listen(port , () => {
    console.log(`App listening on ${port}`);
})