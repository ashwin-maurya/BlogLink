const mongoose = require('mongoose')
const { Schema } = mongoose
const BlogCardSchema = new mongoose.Schema({

    Title: String,
    Author_name: String,
    Author_url: String,
    Description: String,
    tags: String,
    Blog_url: String,
    Date: {
        default: Date.now,
        type: Date
    }



});

module.exports = mongoose.model('blog', BlogCardSchema)