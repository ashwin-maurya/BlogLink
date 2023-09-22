const mongoose = require("mongoose")
const express = require("express")
const app = express()

const DB = "mongodb+srv://108aryanmaurya:Eastwood123@cluster0.uth4px6.mongodb.net/BLUE_SKY?retryWrites=true&w=majority"
const connectToMongo = () => {

    mongoose.connect(DB).then(() => {
        console.log("Connection Successfull")
    }).catch((err) => console.log(err + "NO connection"))

}

module.exports = connectToMongo;