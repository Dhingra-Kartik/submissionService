const SubmissionRepository = require('./submissionRepository');

const fastifyPlugin = require('fastify-plugin');

async function repositoryPlugin(fastify, options){
    fastify.decorate('submissionRepository', new SubmissionRepository());  //adding the key value pair in fastify instance so that is why used testservice in controller layer
   
}

module.exports = fastifyPlugin(repositoryPlugin);