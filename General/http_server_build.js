const fstat = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req , res)=>{

    // setting response
    // res.statusCode = 200;               // 200 status code is ok
    res.setHeader('Content-Type' , 'text/html');          // by this our request serve as an html form

    // The res.end() function is used to end the response process. This method actually comes from the Node core, specifically the response.end() method of HTTP.ServerResponse. Use to quickly end the response without any data.

    if(req.url == '/')
    {
        res.statusCode = 200;
        res.end('<h1>THis is HTTP server build</h1><p>hdgjdb vbjvbjk vvfbuvbfkv vfbvjfbjv jbiufjvkjr vvbfvbfvbibv</p>')     
    }


    else if(req.url == '/about')
    {
        res.statusCode = 200;
        res.end('<h1>THis is about</h1><p>hdgjdb vbjvbjk vvfbuvbfkv vfbvjfbjv jbiufjvkjr vvbfvbfvbibv</p>')     
    }

    else if(req.url == '/hello')
    {
        res.statusCode = 200;
        const data = fstat.readFileSync('index.html');
        res.end(data.toString())
    }
    else
    {
        res.statusCode = 404;
        res.end('<h1>404 NOt Found</h1>')
    }
});

server.listen(port , ()=>{
    console.log("Server is listen on port " + port )
});