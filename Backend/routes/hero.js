const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ title: "Welcome to Real Estate", description: "Find your dream home here!" });
});

module.exports = router;
