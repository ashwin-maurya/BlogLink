const mongoose = require('mongoose')
const { Schema } = mongoose
const BlogCardSchema = new mongoose.Schema({

    Title: {
        type: String,
        required: true
    },





    tags: [],

    Category: {
        type: String,
        required: true
    },
    Blog_url: {
        type: String,
        required: true
    },
    Date: {
        default: Date.now,
        type: Date

    }



});

module.exports = mongoose.model('blogCard', BlogCardSchema)