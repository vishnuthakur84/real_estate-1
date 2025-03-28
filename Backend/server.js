// const express = require("express");
// const cors = require("cors");
// const path = require("path");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Import Routes
// const aboutRoutes = require("./routes/about");
// const contactRoutes = require("./routes/contact");
// const footerRoutes = require("./routes/footer");
// const heroRoutes = require("./routes/hero");
// const loginRoutes = require("./routes/login");
// const navbarRoutes = require("./routes/navbar");
// const projectsRoutes = require("./routes/projects");
// const signupRoutes = require("./routes/signup");

// // Use Routes
// app.use("/api/about", aboutRoutes);
// app.use("/api/contact", contactRoutes);
// app.use("/api/footer", footerRoutes);
// app.use("/api/hero", heroRoutes);
// app.use("/api/login", loginRoutes);
// app.use("/api/navbar", navbarRoutes);
// app.use("/api/projects", projectsRoutes);
// app.use("/api/signup", signupRoutes);

// // Serve frontend build files
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// ✅ Middleware
app.use(cors({
    origin: "http://localhost:5173", // Allow frontend requests
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
app.use(express.json()); // Enable JSON request body parsing

// ✅ Import Routes
const aboutRoutes = require("./routes/about");
const contactRoutes = require("./routes/contact");
const footerRoutes = require("./routes/footer");
const heroRoutes = require("./routes/hero");
const loginRoutes = require("./routes/login");
const navbarRoutes = require("./routes/navbar");
const projectsRoutes = require("./routes/projects");
const signupRoutes = require("./routes/signup");

// ✅ Use Routes
app.use("/api/about", aboutRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/navbar", navbarRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/signup", signupRoutes);

// ✅ Serve Frontend Build (If deployed)
app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Vite build folder

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Backend server is running on port ${PORT}`);
});
