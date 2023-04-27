const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    lastName:{
        type: String,
        required: true
    },
    firstName: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", userSchema);