const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
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
        enum: ["PENDING", "SUCCESS", "RE", "TLE", "MLE", "WRONG ANSWER", "COMPLETED"],
        default: "PENDING",
    }
});

const Submission = mongoose.model('Submission', submissionSchema);
module.exports = Submission;