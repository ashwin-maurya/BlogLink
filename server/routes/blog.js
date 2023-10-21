const express = require("express");
const router = express.Router();
// const Blog = require("../models/Blog");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const blogCard = require("../models/BlogCard");
const blog = require("../models/BlogContent");
const UserDetail = require("../models/UserDetails");

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

router.get("/filterblog", async (req, res) => {
  try {
    const username = req.query.username;
    const blogs = await blogCard.find({ UserName: username });

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
      const { userID, postID, Title, Category, UserName, tags, Blog_url } =
        req.body;

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

router.put("/updateblog/:id", fetchuser, async (req, res) => {
  try {
    const { Title, description, tags, Category, Blog_url } = req.body;
    console.log(req.body)
    // let blog1 = await blogCard.find({ postID: req.params.id })
    const newblog = {};
    // const newblog = {};
    console.log({ postID: req.params.id });
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
    if (description) {
      newblog.description = description
    }

    // Find the note to be updated and update it
    let Blog = await blogCard.find({ postID: req.params.id });
    let Blog2 = await blog.find({ postID: req.params.id });
    if (!Blog || !Blog2) {
      return res.status(404).send("not found");
    }

    //   if (blog.user.toString() !== req.user.id) {
    //     return res.status(401).send("Not Alowed");
    //   }

    Blog = await blogCard.findOneAndUpdate(
      { postID: req.params.id },
      { $set: newblog },
      { new: true }
    );
    console.log(Blog)
    Blog2 = await blog.findOneAndUpdate(
      { postID: req.params.id },
      { $set: { ...newblog, description: description } },
      { new: true }
    );
    console.log(Blog2)
    res.json({ Blog, Blog2 });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Sever error,Something in the way");
  }
});

// ROUTE 4:Delete an existing note using : DELETE "/api/notes/deletenote" .login required

router.delete("/deleteblog/:id", async (req, res) => {
  try {
    // Find the note to be deleted and delete it
    let blog1 = await blogCard.find({ postID: req.params.id });
    let blog2 = await blog.find({ postID: req.params.id });
    if (!blog1 || !blog2) {
      return res.status(404).send("not found");
    }

    //Allow deletion only if user owns it
    // if (blog1.user.toString() !== req.user.id) {
    //   return res.status(401).send("Not Alowed")
    // }

    blog1 = await blogCard.findOneAndDelete({ postID: req.params.id });
    blog2 = await blog.findOneAndDelete({ postID: req.params.id });

    return res.json({
      success: "note has been deleted",
      blog1: blog1,
      blog2: blog2,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Sever error,Something in the way");
  }
});

module.exports = router;
//getuserimg
router.get("/userImg/:userID", async (req, res) => {
  try {
    const username = req.params.userID;
    const blogs = await UserDetail.find({ userID: username });



    //   console.log(req.user.id)
    console.log(blogs[0]?.profileImg)
    res.json(blogs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Sever error,Something in the way");
  }
});
