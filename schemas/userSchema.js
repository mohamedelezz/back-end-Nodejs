const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        validate: {validator: function (name) {

            return true
        }, message: 'Name is empty'}
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024,
    },
})

const User = mongoose.model("User", userSchema)
module.exports = User;