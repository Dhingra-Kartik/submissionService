const {Worker} = require('bullmq');
const redisConnection = require('../config/redisConfig');
const axios = require('axios');

function EvalautionWorker(queue){
    new Worker('EvaluationQueue', async job => {
        if(job.name === 'EvaluationJob'){
            

        const response = await axios.post('http://localhost:3001/sendPayload', {
            userId: job.data.userId,
            payload: job.data
        })
            console.log("JOBDATA", job.data);
        }
    }, {
        connection: redisConnection
    });
}


module.exports = EvalautionWorker;

