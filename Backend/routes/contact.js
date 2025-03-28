const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { firstName, lastName, email, phone, description } = req.body;

    console.log("Received Contact Request:", req.body);

    // Simulate saving data (since no database)
    res.json({ message: "Contact request received successfully!", data: req.body });
});

module.exports = router;
