const mongoose = require("mongoose")


const connectDB = async() => {
        await mongoose.connect(process.env.MONGO_URL).then(connection => {
            console.log("connected to database")
        }).catch(err => {
            console.log(err)
        })
    }

module.exports = {
    connectDB
}