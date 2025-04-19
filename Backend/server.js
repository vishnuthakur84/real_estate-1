import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import meetingRoutes from "./routes/meetingRoutes.js";

// ... other middleware
app.use("/api/meetings", meetingRoutes);



dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Start the server
app.listen(5000, () => console.log("Server running on port 5000"));
