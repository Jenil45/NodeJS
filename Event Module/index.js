// Node.js has a built in module called Events
// Where we can create , fire and listen our own events

const EventEmitter = require('events')

const event = new EventEmitter();

// Performing this task on event fire sayMyName
event.on('sayMyName' , ()=>{
    console.log("Your name is Jenil")
})
event.on('sayMyName' , ()=>{
    console.log("Your Surname is Thakor")
})
event.on('sayMyName' , ()=>{
    console.log("Your father's name is Kamleshbhai")
})
event.on('sayMyName' , ()=>{
    console.log("Your mother's name is Daxaben")
})

// create our own event
event.emit('sayMyName');


// 

event.on("checkpage" , (sc,msg)=>{
    console.log(`Status code is ${sc} and message is ${msg}`);
})

event.emit("checkpage" , 200 , "ok")
