const mongoose = require("mongoose");

const tribeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String
    },

    dateAdded: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Tribe", tribeSchema);