const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "About Us API is working!" });
});

module.exports = router;
