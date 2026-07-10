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
    async updateSubmission(job){
            await Submission.updateOne(
                {_id: job.data.submissionId},
                {$set: {
                    status: job.data.response.status
                }
                },
                {
                    upsert: true
                }
            );
            const status = job.data.reponse.status;
            const id = job.data.submissionId;
        }
    };

module.exports = SubmissionRepository;