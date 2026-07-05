// async function pingCheck(){
//     return 'pong';
// }
const { fetchProblemDetails } = require('../apis/ProblemAdminApi');
const SubmissionProducer = require('../producers/submissionQueueProducer');

class SubmissionService{
    constructor(submissionRepository){
        this.submissionRepository = submissionRepository;
    };

    async pingCheck(){
    return 'heeeeey';
}
    async addSubmission(submissionPayload){

        const problemId = submissionPayload.problemId;
        const problemAdminResponse = await fetchProblemDetails(problemId);
        if(!problemAdminResponse){console.log("SERVICE: There is some error fetching details")};
        console.log("HEEEEEEEEEEEEEE===============================================================", problemAdminResponse.data.codeStubs);

        const languageCodeStub = problemAdminResponse.data.codeStubs.find(codeStub => codeStub.language.toLowerCase() === submissionPayload.language.toLowerCase());
        console.log("Woh mil gaya !!! acc to language dil gaya: ", languageCodeStub);

        submissionPayload.code = languageCodeStub.startSnippet + "\n\n" + submissionPayload.code + "\n\n" + languageCodeStub.endSnippet;
        console.log(submissionPayload.endSnippet);
        console.log("FINALLY: ", submissionPayload.code);
      

        const submission= await this.submissionRepository.createSubmission(submissionPayload);
        if(!submission){
            throw {message: "NOT ABLE TO CREATE IT"};
        }
        console.log(submission);
        const response = await SubmissionProducer({
            [submission._id]:{
            code: submission.code,
            language: submission.language,
            inputCase: problemAdminResponse.data.testCases[0].input,
            outputCase: problemAdminResponse.data.testCases[0].output,
            }

        });
    return {queueResponse: response, submission};
}
}

module.exports = SubmissionService;
