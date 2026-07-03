const SubmissionQueue = require('../queues/submissionQueue');

module.exports = async function(payload){
    await SubmissionQueue.add("SubmissionJob", payload);
    console.log("ADDED A NEW SUBMISSION JOB");
}