const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

}

const myEmitter = new MyEmitter();

myEmitter.on("WaterFall" , ()=>{
    console.log("Please turn off motor")
});

console.log("Program is running")
myEmitter.emit("WaterFall");