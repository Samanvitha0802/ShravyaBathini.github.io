const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
    childname: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    guaidph: {
        type: String,
        required: true
    },
    addinfo: {
        type: String
    }
});

module.exports = mongoose.model("Education", educationSchema);