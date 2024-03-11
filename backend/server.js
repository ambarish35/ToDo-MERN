const express = require('express')
const mongoose = require('mongoose')
const taskRouter = require('./routes/taskRouter')
const cors = require("cors")
require('dotenv').config()
const server = express()


//Middlewares
server.use(express.json())
server.use(cors())
server.use("/", taskRouter)

//Database connection
try {
    mongoose.connect("mongodb+srv://ambarishsarkar35:Abcd1234xyz@cluster0.nwuzqlp.mongodb.net/todo")
    console.log("Database Connected")
} catch (e) {
    console.log(e)
}


server.listen(process.env.PORT || 8080, (req, res) => {
    console.log(`Server started at ${process.env.PORT || 8080}`)
})
