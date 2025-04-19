import express from "express";
import Meeting from "../models/Meeting.js";

const router = express.Router();

router.post("/schedule", async (req, res) => {
  const meeting = new Meeting(req.body);
  await meeting.save();
  res.status(201).json("Meeting Scheduled!");
});

export default router;
