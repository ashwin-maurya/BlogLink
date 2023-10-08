const mongoose = require("mongoose");
const express = require("express");
const { Schema } = mongoose;
const router = express.Router();
const UserSchema = new Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
  },
  education: {
    type: String,
  },
  work: {
    type: String,
  },
  location: {
    type: String,
  },
});
const UserDetail = mongoose.model("UserDetail", UserSchema);
// User.createIndexes();

module.exports = UserDetail;
// module.exports = router;