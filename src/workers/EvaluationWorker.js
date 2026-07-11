const {Worker} = require('bullmq');
const redisConnection = require('../config/redisConfig');
const axios = require('axios');
const SubmissionService = require('../service/submissionService');
const SubmissionRepository = require('../repository/submissionRepository');
const submissionService = new SubmissionService(new SubmissionRepository());
const { SOCKETSERVICE} = require('../config/serverConfig');


function EvalautionWorker(queue){
    new Worker('EvaluationQueue', async job => {
        if(job.name === 'EvaluationJob'){
            const response = await axios.post(`${SOCKETSERVICE}`, {
            userId: job.data.userId,
            payload: job.data
        })
        console.log("JOBDATA", job.data);

        const result = await submissionService.updateSubmission(job);
            const status = job.data.reponse.status;
            const id = job.data.submissionId;
            
        }
    }, {
        connection: redisConnection
    });
}




module.exports = EvalautionWorker;

