// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/jenil');
  console.log("Succesfully connected....")
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}


const kittySchema = new mongoose.Schema({
  name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
  const greeting = "My name is " + this.name;
  console.log(greeting);
};

// convert schema into one model
const Kitten = mongoose.model('Jenil', kittySchema);




// A model is a class with which we construct documents. In this case, each document will be a kitten with properties and behaviors as declared in our schema. Let's create a kitten document representing the little guy we just met on the sidewalk outside:

const jenilKitty = new Kitten({ name: 'Meet' });
console.log(jenilKitty.name); // 'Silence'

// jenilKitty.speak();


// saving the collections in db as name of pural version of Jenil
jenilKitty.save();
jenilKitty.speak();

// find using mongoose kitten
// Kitten.find(function(err , kittens){
//   if(err) return console.log(err);
//   console.log(kittens)
// })

// find particular
// Kitten.find({ name: 'Jenil' });