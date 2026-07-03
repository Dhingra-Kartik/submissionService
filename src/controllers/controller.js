
async function pingRequest(req, res){
console.log("FROM CONTROLLER: ", this.testService); //every controller => has an fastify object

    // const response = await testService.pingCheck();
    const response = await this.testService.pingCheck();  //this = fastify instance, attache dkey testservice which has function pingCheck
    return res.send({
        data: "Hey controller layer is up",
        data2: response
    });
}

async function createSubmission(req, res){
    console.log(req.body);
    const response = await this.submissionService.addSubmission(req.body);
    return res.status(201).send({
        error: {},
        data: response,
        success: true,
        message: "Created Submission successfully"
    })
    }

module.exports = { 
    pingRequest,
    createSubmission
};