const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDB = require('./db')
const mongoose = require("mongoose")
console.log(require("./models/doctorModel"))



const app = express()

dotenv.config()

app.use(cors())




app.listen(process.env.PORT, () => {
    console.log("server running  " + process.env.PORT)
})


connectDB.connectDB()