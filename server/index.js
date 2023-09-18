const mongoose = require("mongoose")
const express = require("express")
const app = express()

const DB = "mongodb+srv://108aryanmaurya:Eastwood123@cluster0.uth4px6.mongodb.net/BLUE_SKY?retryWrites=true&w=majority"
mongoose.connect(DB).then(() => {
    console.log("Connection Successfull on your face")
}).catch((err) => console.log(err + "NO connection"))

let Blogdata = ""
let content = (data) => {
    Blogdata = data
}
console.log(Blogdata + " blogdata")
// Create a Mongoose schema for your data
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
});

const BlogSchema = new mongoose.Schema({

    description: String
})

// Create a Mongoose model based on the schema
const User = mongoose.model('User', schema);
const BlogData = mongoose.model('BlogData', BlogSchema)
// Create a new user document and save it to MongoDB
const newUser = new User({
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
});

const NewBlog = new BlogData({
    description: Blogdata
})

newUser.save()
    .then(() => {
        console.log('User saved to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error saving user:', error);
    });


