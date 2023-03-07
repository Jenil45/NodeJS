const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/${process.env.DBName}`).then(() => {
    console.log("Connection successfull")
}).catch((e) => {
    console.log("No connection");
});