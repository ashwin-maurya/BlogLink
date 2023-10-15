const mongoose = require("mongoose");
const express = require("express");
const app = express();

const DB =
  // "mongodb+srv://cluster0.uth4px6.mongodb.net/" --apiVersion 1 --username 108aryanmaurya
  "mongodb+srv://ashwinmaurya30:royalenamesash@bluesky.v63c1bx.mongodb.net/";
// `mongodb+srv://108aryanmaurya:${encodeURIComponent('108aryanmaurya123')}@blue_sky.uth4px6.mongodb.net/`
// "mongodb+srv://108aryanmaurya:ZTc9VJFqfd3FqYFJ@BlueSky.hhpvtox.mongodb.net/"
const connectToMongo = () => {
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Connection Successfull");
    })
    .catch((err) => console.log(err + "NO connection"));
};

module.exports = connectToMongo;
