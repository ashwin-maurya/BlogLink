const mongoose = require("mongoose");
const express = require("express");
const { Schema } = mongoose;
const router = express.Router();
const FeedbackSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  author: {
    type:
  }
  description: {
    type: String,
  },
  rating: {
    type: String,
  },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);
module.exports = Feedback;
