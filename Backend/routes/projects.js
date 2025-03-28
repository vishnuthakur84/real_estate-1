const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        { id: 1, name: "Luxury Apartment", location: "New York" },
        { id: 2, name: "Beach House", location: "California" }
    ]);
});

module.exports = router;
