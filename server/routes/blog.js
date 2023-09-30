const express = require("express");
const router = express.Router();
// const Blog = require("../models/Blog");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const blogCard = require("../models/BlogCard");
const blog = require("../models/BlogContent");

// -----------------------------------------------------------------------------------------------------------------
// BLOGCONTENT APIS

// ROUTE 1. post Blog Content using : POST "api/blogs/postblogcontent"
router.post("/postblogcontent", fetchuser, async (req, res) => {
  try {
    const {
      userID,

      postID,
      Title,
      description,
      tags,
      Category,

      Blog_url,
    } = req.body;
    // If there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const blog2 = new blog({
      userID,
      postID,
      Title,
      description,
      tags,
      Category,

      Blog_url,
    });

    const savedblog = await blog2.save();
    res.json(savedblog);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Sever error,Something in the way");
  }
});

// ROUTE 2: Get Single blog content in the database : POST "/api/blogs/singleblogcontent"

router.post("/getsingleblogcontent", async (req, res) => {
  try {
    const { id } = req.body;
    const blogs = await blog.find({ postID: id });

    //   console.log(req.user.id)

    res.json(blogs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Sever error,Something in the way");
  }
});

//------------------------------------------------------------------------------------------------------------------
//BLOGCARDS APIS
//ROUTE 1: Get all the blogs using : GET "/api/blogs/fetchallblogs". Login required
router.get("/fetchallblogCards", async (req, res) => {
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
    const { state, value } = req.body;
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
  "/addblogCard",
  fetchuser,

  async (req, res) => {
    try {
      const { userID, postID, UserName, Title, Category, tags, Blog_url } = req.body;

      // If there are errors , return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("hello");

        return res.status(400).json({ errors: errors.array() });
      }
      const blog = new blogCard({
        Title,
        UserName,
        postID,
        userID,
        Category,
        tags,
        Blog_url,
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
    const {
      Title,

      tags,
      Category,
      Blog_url,
    } = req.body;
    const newblog = {};
    if (Title) {
      newblog.Title = Title;
    }

    if (tags) {
      newblog.tags = tags;
    }

    if (Category) {
      newblog.Category = Category;
    }
    if (Blog_url) {
      newblog.Blog_url = Blog_url;
    }
    // Find the note to be updated and update it
    let Blog = await blogCard.findById(req.body.id);
    if (!Blog) {
      return res.status(404).send("not found");
    }

    //   if (blog.user.toString() !== req.user.id) {
    //     return res.status(401).send("Not Alowed");
    //   }

    Blog = await blogCard.findByIdAndUpdate(
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
