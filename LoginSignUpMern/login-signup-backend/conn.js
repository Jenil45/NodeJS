// getting-started.js
import mongoose from 'mongoose'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/mernData').then(()=>{
    console.log("Connection with mongodb is successfull");
  }).catch(()=>{
    console.log("Connection with mongodb is failed");
  });
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}