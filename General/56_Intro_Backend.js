const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Display Property</title>
      <style>
          
          *
          {
              box-sizing: border-box;
          }
          header
          {
              margin: auto;
              border: 2px solid red;
              width: 100%;
          }
          img{
              width: 40px;
              border-radius: 20px;
              display: block;                     /*As we know that image take an specific width of it on display block it take whole space */
              margin: auto;           
          }
  
          h3
          {
              font-family: monospace;
              padding: 0px 4px;
              margin: 5px;
              margin-left: 2px;
              margin-right: 2px;
              text-align: center;
          }
  
          .box
          {
              border: 2px solid rgb(3, 3, 78);
              background-color: rgb(163, 163, 245);
              margin: 5px 0px;
              padding: 12px 23px;
              width: 33%;
              display: inline-block;                      /*Display should be inline then block means on width changing there is no errors*/
          }
  
          .container
          {
              margin: auto;
              width: 99%;
          }
  
      </style>
  
  </head>
  <body>
      <header class="top">
          <img src="blog.png" alt="Error...">
          <h3>Welcome to Blogs...!!!</h3> 
      </header>
  
      <div class="container">
  
          <div class="box">
              <h4>Fruits</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id doloribus magni sequi a. Culpa ullam recusandae labore voluptates explicabo! Voluptatem sed odio, sequi ullam quasi ipsa dolore? Animi placeat, adipisci modi debitis labore eligendi!</p>
          </div>
         
  
          <div class="box">
              <h4>Vegetables</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id doloribus magni sequi a. Culpa ullam recusandae labore voluptates explicabo! Voluptatem sed odio, sequi ullam quasi ipsa dolore? Animi placeat, adipisci modi debitis labore eligendi!</p>
          </div>
         
          <div class="box">
              <h4>Stationary</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id doloribus magni sequi a. Culpa ullam recusandae labore voluptates explicabo! Voluptatem sed odio, sequi ullam quasi ipsa dolore? Animi placeat, adipisci modi debitis labore eligendi!</p>
          </div>
          
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});