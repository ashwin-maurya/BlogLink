const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");




//ROUTE 1: Get all the blogs using : GET "/api/blogs/fetchallblogs". Login required
router.get("/fetchallblogs", fetchuser, async (req, res) => {
    try {
        const blogs = await Blog.find();
        //   console.log(req.user.id)

        res.json(blogs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever error,Something in the way");
    }
});


// put blogs in database
router.post(
    "/addblog", fetchuser,

    async (req, res) => {
        try {
            const { description } = req.body;
            // If there are errors , return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const blog = new Blog({

                description,


            });
            const savedblog = await blog.save();
            res.json(savedblog);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Sever error,Something in the way");
        }
    }
);
module.exports = router;
