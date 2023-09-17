const mongoose = require("mongoose")
const express = require("express")
const app = express()

const DB = "mongodb+srv://108aryanmaurya:Eastwood123@cluster0.uth4px6.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB).then(() => {
    console.log("Connection Successfull on your face")
}).catch((err) => console.log(err + "NO connection"))