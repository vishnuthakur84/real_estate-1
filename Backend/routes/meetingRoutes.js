import express from "express";
import Meeting from "../models/Meeting.js";

const router = express.Router();

// Create a new meeting
router.post("/", async (req, res) => {
  const { propertyId, sellerId, meetingDate } = req.body;

  try {
    const meeting = new Meeting({ propertyId, sellerId, meetingDate });
    await meeting.save();
    res.status(201).json({ message: "Meeting scheduled", meeting });
  } catch (err) {
    res.status(500).json({ error: "Failed to schedule meeting" });
  }
});

export default router;
