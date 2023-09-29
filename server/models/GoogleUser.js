const mongoose = require('mongoose')
const express = require("express");
const { Schema } = mongoose
const router = express.Router();
const GoogleUserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {

        type: String,
        required: true,
        unique: true
    },



})


module.exports = mongoose.model('GoogleUser', GoogleUserSchema)
