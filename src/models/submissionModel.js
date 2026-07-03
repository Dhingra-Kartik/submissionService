const mongoose = require('mongoose');
const submissionQueue = require('../queues/submissionQueue');

const submissionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "User Id is missing"],
    },

    problemId: {
        type: String,
        required: [true, "Problem Id is missing"],

    },

    code: {
        type: String,
        required: [true, "Code is missing"],
    }, 
    language: {
        type: String,
        required: [true, "Language is missing"],

    },
    status: {
        type: String,
        enum: ["Pending", "Success", "RE", "TLE", "MLE", "WA"],
        default: "Pending",
    }
});

const Submission = mongoose.model('Submission', submissionSchema);
module.exports = Submission;