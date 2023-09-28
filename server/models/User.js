const mongoose = require("mongoose");
const express = require("express");
const { Schema } = mongoose;
const router = express.Router();
const UserSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("user", UserSchema);
// User.createIndexes();

module.exports = User;
// module.exports = router;
