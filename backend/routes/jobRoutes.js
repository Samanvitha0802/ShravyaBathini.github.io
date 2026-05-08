const express = require("express");

const router = express.Router();

const Job = require("../models/Job");


// POST JOB
router.post("/", async (req, res) => {

    try {

        const newJob = new Job(req.body);

        await newJob.save();

        res.status(201).json({
            message: "Job posted successfully"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


// GET ALL JOBS
router.get("/", async (req, res) => {

    try {

        const jobs = await Job.find();

        res.json(jobs);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


// DELETE JOB
router.delete("/:id", async (req, res) => {

    try {

        await Job.findByIdAndDelete(req.params.id);

        res.json({
            message: "Job deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;