const mongoose = require('mongoose')
const express = require("express");
const { Schema } = mongoose
const router = express.Router();
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {

        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true

    },


})
const User = mongoose.model('user', UserSchema)
// User.createIndexes();

module.exports = User
// module.exports = router;