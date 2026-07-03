const SubmissionService = require('./submissionService');
const TestService = require('./submissionService');
const fastifyPlugin = require('fastify-plugin');

async function servicePlugin(fastify, options){
    // console.log(testService, fastify);

    // fastify.decorate('testService', testService);
    fastify.decorate('submissionService', new SubmissionService(fastify.submissionRepository));  //adding the key value pair in fastify instance so that is why used testservice in controller layer
    //console.log(testService, fastify);
}

module.exports = fastifyPlugin(servicePlugin);