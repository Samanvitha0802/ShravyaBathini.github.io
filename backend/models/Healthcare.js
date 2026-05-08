const mongoose = require("mongoose");

const healthcareSchema = new mongoose.Schema({
    camp_name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    contact_name: {
        type: String,
        required: true
    },
    contact_number: {
        type: String,
        required: true
    },
    camp_details: {
        type: String
    }
});

module.exports = mongoose.model("Healthcare", healthcareSchema);