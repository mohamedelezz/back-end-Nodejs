const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    discription: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1024,
    },
    phone: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 25,
    },
    specialization: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 500,
    },
    rate: {
        type: Number,

    },
    fees: {
        type: Number,
        required: true,

    },
    // available: Boolean

})
const Doctors = mongoose.model('Doctors', doctorSchema)

module.exports = Doctors
