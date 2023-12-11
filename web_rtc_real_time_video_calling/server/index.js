import express from "express";
import http from 'http';
import cors from 'cors';
import IO from 'socket.io';
import { PORT } from "./config";
import EVENTS from "./event";

const app = express();

// making server
const server = http.createServer(app);
const io = IO(server , {
    cors : {
        origin : "*",
        methods : ['GET' , 'POST']
    }
});

const port = process.env.PORT || PORT;


app.get("/" , (req , res) => {
    res.send(`Server is runnign on port number ${PORT}`);
})

// email and socketId mapping
const emailSocketMapping = new Map();
const socketEmailMapping = new Map();


io.on('connection' , (socket) => {
    console.log("Socket connected" , socket.id);
    
    // user joining the room
    socket.on(EVENTS.ROOM_JOIN , (data) => {
        
        // collecting incoming data
        const {email , roomId} = data;
        console.log(email , roomId);
        // mapped incoming data
        emailSocketMapping.set(email , socket.id);
        socketEmailMapping.set(socket.id , email);

        // sending the whole room that this user is joined
        io.to(roomId).emit(EVENTS.USER_JOINED , {email , id : socket.id});

        // joining that user to room
        socket.join(roomId);

        // joining the user to room and take it to that room
        io.to(socket.id).emit(EVENTS.ROOM_JOIN , data);
    })

    //  call from 
    socket.on(EVENTS.CALL_USER , ({to , offer}) => {
        io.to(to).emit(EVENTS.INCOMING_CALL_USER , {from : socket.id , offer})
    })

    //  call accepted sent to initiator
    socket.on(EVENTS.ACCEPTED_CALL , ({to , ans}) => {
        io.to(to).emit(EVENTS.ACCEPTED_CALL , {from : socket.id , ans});
    })

})


server.listen(port , () => {console.log(`Server is running on http://localhost:${port}/`);})