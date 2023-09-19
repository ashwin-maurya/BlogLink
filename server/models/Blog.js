
const mongoose = require('mongoose')
const { Schema } = mongoose
const BlogSchema = new mongoose.Schema({
    description: String,


});

module.exports = mongoose.model('blog', BlogSchema)