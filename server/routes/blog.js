const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const blogCard = require("../models/BlogCard");




//ROUTE 1: Get all the blogs using : GET "/api/blogs/fetchallblogs". Login required
router.get("/fetchallblogs", async (req, res) => {
    try {
        const blogs = await blogCard.find();
        //   console.log(req.user.id)

        res.json(blogs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever error,Something in the way");
    }
});

// ROUTE 2: Put all a blog in the database : POST "/api/blogs/addblog"

router.get("/filterblog", fetchuser, async (req, res) => {
    try {
        const { state } = req.body
        const blogs = await blogCard.find(state);
        //   console.log(req.user.id)

        res.json(blogs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever error,Something in the way");
    }
});




// ROUTE 3: Put all a blog in the database : POST "/api/blogs/addblog"
router.post(
    "/addblog", fetchuser,

    async (req, res) => {
        try {
            const { Title,
                Author_name,
                Author_url,
                Description,
                Category,
                tags,
                Blog_url } = req.body;

            // If there are errors , return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const blog = new blogCard({

                Title,
                Author_name,
                Author_url,
                Description,
                Category,
                tags,
                Blog_url


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
