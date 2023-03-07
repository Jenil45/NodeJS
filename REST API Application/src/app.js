// import all required modules
const express = require("express");
const app = express();
const router = require("./routers/men");

const port = process.env.port || 3000;

require("./db/conn");
const MensRanking = require("../src/models/mens");

// setting requirements
app.use(express.json());
app.use(router);

// handling home request
app.get("/home" , (req , res) => {
    res.send("This is home page");
})



// listening on server
app.listen(port , () => {
    console.log(`The connection is establish on port ${port}`);
})