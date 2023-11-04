
const mongoose = require('mongoose')
const { Schema } = mongoose
const CommentSchema = new mongoose.Schema({
    postID: {
        type: String,

    },
    userID: {
        type: String,
        // required: true
    },
    comment: {
        type: String,
        // required: true
    },
    UserName: {
        type: String,
        // required: true
    },
    reply: [],



    Date: {
        default: new Date().getTime() / 1000,
        type: Date

    }




});



module.exports = mongoose.model('Comment', CommentSchema)