// fs module use
const fs = require("fs");

//reading the content
let text = fs.readFileSync("jay.txt" , "utf-8");
//if not work then use
// let text = fs.readFileSync("C:\\JAY\\WEB_DEVELOPMENT_CODE_WITH_HARRY\\Node.js\\jay.txt" , "utf-8");

console.log(text);

// Replacing text under jay.txt
text = text.replace('jenil' , 'jay');


// Creating file named jenil.txt
fs.writeFileSync("jenil.txt" , text);
let jetext = fs.readFileSync("jenil.txt" , "utf-8");
console.log(jetext);