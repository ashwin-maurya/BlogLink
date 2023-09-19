const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");




// router.get("/")