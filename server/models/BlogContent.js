
const mongoose = require('mongoose')
const { Schema } = mongoose
const BlogSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    postID: {
        type: String,
        // required: true
    },


    Title: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        // required: true
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

module.exports = mongoose.model('blog', BlogSchema)