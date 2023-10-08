const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

const Comment = require("../models/Comments");


// ROUTE 3: Put all a blog in the database : POST "/api/blogs/addblog"
router.post(
    "/addcomment",
    fetchuser,

    async (req, res) => {
        try {
            const { userID, postID, comment,
                UserName
            } =
                req.body;

            // If there are errors , return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log("hello");

                return res.status(400).json({ errors: errors.array() });
            }
            const commentdata = new Comment({

                UserName,
                postID,
                userID,
                comment,

            });
            const savedcomment = await commentdata.save();
            res.json(savedcomment);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Sever error,Something in the way");
        }
    }
);



// adding reply
router.post(
    "/addreply/:id",
    fetchuser,

    async (req, res) => {
        try {
            console.log(req.params.id)
            const { reply,
                username,
                userImg,
                timeStamp

            } =
                req.body;
            console.log(req.body)
            const newcomment = {};
            if (reply) {
                newcomment.reply = reply;
            }
            if (username) {
                newcomment.username = username;
            }
            if (userImg) {
                newcomment.userImg = userImg;
            }
            if (timeStamp) {
                newcomment.timeStamp = timeStamp;
            }


            let comments = await Comment.findById({ _id: req.params.id });
            console.log(comments)
            if (!comments) {
                return res.status(404).send("not found");
            }

            //   if (blog.user.toString() !== req.user.id) {
            //     return res.status(401).send("Not Alowed");
            //   }

            comments = await Comment.findByIdAndUpdate(
                { _id: req.params.id },
                { $set: { "reply": { newcomment } } },
                { new: true }
            );
            console.log(comments)
            res.json({ comments });
        } catch (error) {
            console.log("errro dfkvjdfkv")
            console.error(error.message);
            res.status(500).send("Internal Sever error,Something in the way");
        }
    }
);

// ROUTE 3:Update an existing note using : POST "/api/notes/updatenote" .login required

router.put("/editcoment/:id", fetchuser, async (req, res) => {
    try {
        const {


            comment
        } = req.body;
        const newcomment = {};
        if (comment) {
            newcomment.comment = comment;
        }



        // Find the note to be updated and update it
        let comments = await Comment.findById(req.params.id);
        if (comments) {
            return res.status(404).send("not found");
        }

        //   if (blog.user.toString() !== req.user.id) {
        //     return res.status(401).send("Not Alowed");
        //   }

        comments = await Comment.findByIdAndUpdate(
            req.params.id,
            { $set: newcomment },
            { new: true }
        );
        res.json({ comments });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever error,Something in the way");
    }
});


// ROUTE 4:Delete an existing note using : DELETE "/api/notes/deletenote" .login required

router.delete('/deletecomment/:id', async (req, res) => {



    try {


        // Find the note to be deleted and delete it
        let comment = await Comment.findById(req.params.id)

        if (comment) {
            return res.status(404).send("not found")
        }

        //Allow deletion only if user owns it 
        // if (blog1.user.toString() !== req.user.id) {
        //   return res.status(401).send("Not Alowed")
        // }

        comment = await Comment.findByIdAndDelete(req.params.id)


        return res.json({ "success": "note has been deleted", comment: comment });
    } catch (error) {

        console.error(error.message);
        res.status(500).send("Internal Sever error,Something in the way");
    }
})


router.get("/getallcommentsbypostID/:id", async (req, res) => {
    try {
        const comments = await Comment.find({ postID: req.params.id });
        //   console.log(req.user.id)

        res.json(comments);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever error,Something in the way");
    }
});




module.exports = router;
