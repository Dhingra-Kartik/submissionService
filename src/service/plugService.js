const TestService = require('./service');
const fastifyPlugin = require('fastify-plugin');

async function servicePlugin(fastify, options){
   // console.log(testService, fastify);

    // fastify.decorate('testService', testService);
    fastify.decorate('testService', new TestService());
    //console.log(testService, fastify);

}

module.exports = fastifyPlugin(servicePlugin);