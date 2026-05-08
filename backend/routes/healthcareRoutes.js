const express = require("express");

const router = express.Router();

const Healthcare = require("../models/Healthcare");

router.post("/", async (req, res) => {

    try {

        console.log("Received Data:");
        console.log(req.body);

        const newCamp = new Healthcare(req.body);

        const savedCamp = await newCamp.save();

        console.log("Saved Successfully:");
        console.log(savedCamp);

        res.status(201).json({
            message: "Healthcare camp registered successfully"
        });

    } catch (error) {

        console.log("ERROR:");
        console.log(error);

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;