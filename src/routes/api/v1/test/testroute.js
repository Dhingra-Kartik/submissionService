const { default: fastifyPlugin } = require('fastify-plugin');
const testController = require('../../../../controllers/controller')

async function testRoute(fastify, options){
    fastify.get('/ping', testController.pingRequest);
}

module.exports = testRoute;
