const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
var fetchuser = require("../middleware/fetchuser");

// API endpoint to handle feedback submission
router.post("/submitFeedback", fetchuser, async (req, res) => {
  try {
    // Assuming the feedback data is sent in the request body
    const { userID, type, description, rating } = req.body;

    // Create a new Feedback instance
    const newFeedback = new Feedback({
      userID,
      type,
      description,
      rating,
    });

    // Save the feedback to the database
    await newFeedback.save();

    // Send a success response
    res.json({ success: true, message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    // Send an error response
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
