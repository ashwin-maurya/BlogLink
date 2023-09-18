const express = require("express");
const router = express.Router();
const Note = require("../models/Notes");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const { status } = require("init");
//ROUTE 1: Get all the notes using : GET "/api/notes/fetchallnotes". Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: '6405884b199c338533d28d63' });
    console.log(req.user.id)

    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Sever error,Something in the way");
  }
});

// ROUTE 2: Add a new note using : POST "/api/notes/addnote". Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid Descrription").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // If there are errors , return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savednote = await note.save();
      res.json(savednote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Sever error,Something in the way");
    }
  }
);

// ROUTE 3:Update an existing note using : POST "/api/notes/updatenote" .login required

router.put('/updatenote/:id', fetchuser, async (req, res) => {
  try {

    const { title, description, tag } = req.body
    //create a newNote object
    const newNote = {};
    if (title) { newNote.title = title }
    if (description) {
      newNote.description = description
    }
    if (tag) {
      newNote.tag = tag
    }
    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id)
    if (!note) {
      return res.status(404).send("not found")
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Alowed")
    }

    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json({ note });
  }

  catch (error) {

    console.error(error.message);
    res.status(500).send("Internal Sever error,Something in the way");
  }
})




// ROUTE 4:Delete an existing note using : DELETE "/api/notes/deletenote" .login required

router.delete('/deletenote/:id', fetchuser, async (req, res) => {



  try {


    // Find the note to be deleted and delete it
    let note = await Note.findById(req.params.id)
    if (!note) {
      return res.status(404).send("not found")
    }

    //Allow deletion only if user owns it 
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Alowed")
    }

    note = await Note.findByIdAndDelete(req.params.id)
    res.json({ "success": "note has been deleted", note: note });
  } catch (error) {

    console.error(error.message);
    res.status(500).send("Internal Sever error,Something in the way");
  }
})

module.exports = router;
