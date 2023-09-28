
const mongoose = require('mongoose')
const { Schema } = mongoose
const BlogSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },


});

module.exports = mongoose.model('blog', BlogSchema)