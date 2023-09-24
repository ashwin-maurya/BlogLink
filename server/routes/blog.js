const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const blogCard = require("../models/BlogCard");
const BlogCard = require("../models/BlogCard");




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

router.post("/filterblog", fetchuser, async (req, res) => {
    try {
        const { state, value } = req.body
        const blogs = await blogCard.find({ [state]: value });
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

// ROUTE 3:Update an existing note using : POST "/api/notes/updatenote" .login required

router.put("/updateblog", fetchuser, async (req, res) => {
    try {
        const { Title,
            Author_name,
            Author_url,
            Description,
            tags,
            Category,
            Blog_url,
        } = req.body
        const newblog = {};
        if (Title) {
            newblog.Title = Title;
        }
        if (Description) {
            newblog.Descriptionescription = Description;
        }
        if (tags) {
            newblog.tags = tags;
        }
        if (Author_name) {
            newblog.Author_name = Author_name;
        }
        if (Author_url) {
            newblog.Author_url = Author_url;
        }
        if (Category) {
            newblog.Category = Category;
        }
        if (Blog_url) {
            newblog.Blog_url = Blog_url;
        }
        // Find the note to be updated and update it
        let Blog = await BlogCard.findById(req.body.id);
        if (!Blog) {
            return res.status(404).send("not found");
        }

        //   if (blog.user.toString() !== req.user.id) {
        //     return res.status(401).send("Not Alowed");
        //   }

        Blog = await BlogCard.findByIdAndUpdate(
            req.body.id,
            { $set: newblog },
            { new: true }
        );
        res.json({ Blog });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever error,Something in the way");
    }
});
module.exports = router;



