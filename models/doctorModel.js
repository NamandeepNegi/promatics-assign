const mongoose = require("mongoose")

const doctorSchema = mongoose.Model({
    name: String
})

const doctorModel = mongoose.Schema(doctorSchema, 'Doctor')

module.exports = {
    doctorModel
}