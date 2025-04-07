const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");

// POST route to handle enquiry submissions
router.post("/enquiry", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to database
    const newEnquiry = new Enquiry({ name, email, phone, message });
    await newEnquiry.save();

    res.status(201).json({ message: "Enquiry submitted successfully" });
  } catch (error) {
    console.error("Error saving enquiry:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = router;
