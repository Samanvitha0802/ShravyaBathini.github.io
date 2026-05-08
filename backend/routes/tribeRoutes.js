const express = require("express");

const router = express.Router();

const Tribe = require("../models/Tribe");


// ADD TRIBE
router.post("/", async (req, res) => {

    try {

        const newTribe = new Tribe(req.body);

        await newTribe.save();

        res.status(201).json({
            message: "Tribe added successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: error.message
        });

    }

});


// GET ALL TRIBES
router.get("/", async (req, res) => {

    try {

        const tribes =
            await Tribe.find().sort({ dateAdded: -1 });

        res.json(tribes);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: error.message
        });

    }

});


// DELETE TRIBE
router.delete("/:id", async (req, res) => {

    try {

        await Tribe.findByIdAndDelete(req.params.id);

        res.json({
            message: "Tribe deleted successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;