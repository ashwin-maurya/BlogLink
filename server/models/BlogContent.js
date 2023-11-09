
const mongoose = require('mongoose')
const { Schema } = mongoose
const BlogSchema = new mongoose.Schema({
    // postID: {
    //     type: String,
    //     // required: true
    // },
    // userID: {
    //     type: String,
    //     // required: true
    // },
    // Title: {
    //     type: String,
    //     // required: true
    // },
    // description: {
    //     type: String,
    //     // required: true
    // },

    // view: {
    //     type: Number,
    //     default: 0
    // },

    // tags: [],

    // Category: {
    //     type: String,
    //     // required: true
    // },
    // Blog_url: {
    //     type: String,
    //     // required: true
    // },
    // Date: {
    //     default: Date.now,
    //     type: Date

    // }

    description: {
        type: String,
    }



});


module.exports = mongoose.model('blog', BlogSchema)