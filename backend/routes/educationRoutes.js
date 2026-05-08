const express = require("express");
const router = express.Router();

const Education = require("../models/Education");

router.post("/", async (req, res) => {
    try {
        const newRequest = new Education(req.body);

        await newRequest.save();

        res.status(201).json({
            message: "Education request submitted successfully"
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;