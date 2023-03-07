/*
    Important points :

        (i) If we want to change object into JSON format then we use JSON.stringify method
        (ii) If we want to change JSON into object format then we use JSON.parse method
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) => {

    if(req.url == "/")
    {
        res.end("This is home page")
    }

    else if(req.url == "/about")
    {
        res.end("This is about page")
    }
    else if(req.url == "/info")
    {
        fs.readFile(`${__dirname}/info.json` , "utf-8" , (err , data) => {
            // console.log(data);
            res.writeHead(200 , {"Content-type" : "application/json"})
            res.end(data)
        })
        // res.end("This is info page")
    }
    else if(req.url == "/contact")
    {
        res.end("This is contact page")
    }
    else
    {
        res.writeHead(404 , {"Content-type" : "text/html"});
        res.end("not found")
    }
})

server.listen(8000 , "127.0.0.1" , ()=>{
    console.log("Listening on port 8000");
})