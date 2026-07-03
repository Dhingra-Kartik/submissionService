// async function pingCheck(){
//     return 'pong';
// }
const SubmissionProducer = require('../producers/submissionQueueProducer');

class SubmissionService{
    constructor(submissionRepository){
        this.submissionRepository = submissionRepository;
    };

    async pingCheck(){
    return 'heeeeey';
}
    async addSubmission(submissionPayload){
        const submission= await this.submissionRepository.createSubmission(submissionPayload);
        if(!submission){
            throw {message: "NOT ABLE TO CREATE IT"};
        }
        console.log(submission);
        const response = await SubmissionProducer(submission);
    return {queueResponse: response, submission};
}


}

module.exports = SubmissionService;
