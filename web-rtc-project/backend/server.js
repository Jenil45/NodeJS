import express from 'express';
import { APP_PORT } from './config';
import router from './routes/routes';
import DBConnect from './database/db_connect';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// making a express app
const app = express()

// connecting to database
DBConnect()

// cookie access permission
app.use(cookieParser());

// using routes
const corsOptions = {
    credentials : true,
    origin : ['http://localhost:3000']

}
app.use(cors(corsOptions));
app.use('/storage' , express.static('storage'));

// we gave json a limit bcz by default it contain only 100kb
app.use(express.json({limit:'8mb'}))
app.use("/" , router);

// request
app.get("/" , (req , res) => {
    res.send("Hello from express")
} )

// listening app on port
const PORT = process.env.PORT || APP_PORT;
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})