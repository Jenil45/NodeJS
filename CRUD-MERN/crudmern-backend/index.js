import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './Routes/route.js'

// create an express app for request-response
const app = express()

// connect to a database
import Connection from './Database/db_conn.js'

// giving a cors permission (cross origin permission)
app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))

app.use(cors())

// get requests
app.use("/" , router);

Connection()


// listening app on given port
app.listen(8000 , () => {`Server is running on port ${8000}`})