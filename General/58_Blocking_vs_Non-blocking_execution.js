// Blocking Code or Synchronus codde
// Any code which execute line by line is called ...

// Non-Blocking or Asynchronus code
// Any code which execute line by line that not guarnted
// And callback will fire

// In previous we perform readFileSync here sync means synchronus

// const fs = require("fs");
// let tex = fs.readFile("jay.txt" , "utf-8");
// console.log("This is a message");                   // It show   code: 'ERR_INVALID_CALLBACK'

// Now we use arrow function
const fs = require("fs");
let tex = fs.readFile("jay.txt" , "utf-8" , (a,b) => {
    console.log(a,b);                                   // This show This is a message null Hi my name is jenil
    //                                 // Because the syntax of readFile is fs.readFile(path , ... , callback)  call back is (error , data) so here a= error and b = data
});
console.log("This is a message"); 


// The main thing to notice after executing the above code is, we are getting the output “This is the message” first, and then the callback function is returning the output as
//  follows-
// The reason for this is, it is an asynchronous function. It allows the readFile() function to read the file completely. By the time the code is reading the file, the next block of
// code is executed. And when the reading is completed, it then prints the data.
// It does not mean that the code is not executed line by line. The code is executed synchronously but the output we get depends upon the time taken while reading the file. 
// An asynchronous function is used here because it does not allow the code to block the user. If we use the asynchronous function here, then the file will be first read and
// then the next line will be executed. 