const Submission = require('../models/submissionModel');
const createSubmission = require('../controllers/controller');

class SubmissionRepository{
    constructor(){
        this.submissionModel = Submission;
    }

    async createSubmission(submission){
        const response = await this.submissionModel.create(submission);
        return response;
    }


  async updateSubmission(job) {
  const responses = job.data.response; // this is the array of ExecutionResponse objects

  let finalStatus = "SUCCESS";

  // If any test case failed or errored
  if (responses.some(r => r.status === "ERROR")) {
    finalStatus = "ERROR";
  } else if (responses.some(r => r.status !== "SUCCESS")) {
    finalStatus = "WRONG ANSWER";
  }

  await Submission.updateOne(
    { _id: job.data.submissionId },
    { $set: { status: finalStatus } },
    { upsert: true }
  );

  console.log(`Submission ${job.data.submissionId} updated with status: ${finalStatus}`);
    }
    };

module.exports = SubmissionRepository;