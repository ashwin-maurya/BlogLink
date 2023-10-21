const express = require("express");
const User = require("../models/User");
const Userdetail = require("../models/UserDetails");
const router = express.Router();
const { body, validator, validationResult } = require("express-validator");
const bycrypt = require("bcryptjs");
var fetchuser = require("../middleware/fetchuser");
var jwt = require("jsonwebtoken");
const JWT_SECRET = "YouwillDieforThat";
const blogCard = require("../models/BlogCard");
const blog = require("../models/BlogContent");

// API:TO GET RELEVANT FORM DATABASE
router.post("/getRelevantBlogs", fetchuser, async (req, res) => {
    try {
        const { data } = req.body
        console.log(data.length)

        let blogarr = []


        for (let i = 0; i < data.length; i++) {
            console.log(typeof data[i])

            let blog2 = await blogCard.find({ "Category": data[i] })

            console.log(blog2)
            blogarr.push(blog2[0])


        }
        res.json(blogarr)
        // let detail = blogCard.findOne({ userID: id })
        // if (detail) {
        // return res.status(404).send("not found");
        // }

        // cosnt arr=relevants.map


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever error,Something in the way");
    }




})


router.get("/getLatestBLogs", async (req, res) => {
    try {

        const startDate = new Date('2023-10-14T09:42:37.800+00:00');
        const endDate = new Date().toISOString();


        // Create a MongoDB query to filter documents with a date field within the specified range
        const query = {
            Date: {
                $gte: startDate, // Greater than or equal to start date
                $lte: endDate,   // Less than or equal to end date
            }
        };
        const blogs = await blogCard.find(query)
        console.log(blogs)
        res.json(blogs)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever error,Something in the way");
    }
})

// router.put("/updateViews",async(req,res)={


// })






module.exports = router;
