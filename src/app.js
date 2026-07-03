const fastifyPlugin = require('fastify-plugin'); //helpe rto ccreate couple of plugins.
const servicePlugin = require('./service/plugService');
const repositoryPlugin = require('./repository/repositoryPlugin');

async function app(fastify, options){    //a simple JS function signature
    await fastify.register(require('@fastify/cors'));

    // fastify.register(require('./routes/api/test/testroute'), {prefix: '/api'});
    await fastify.register(require('./routes/api/apiRoutes'), {prefix: '/api'});
    await fastify.register(repositoryPlugin);
    await fastify.register(servicePlugin);
}

module.exports = fastifyPlugin(app);  //becomes a fastify plugin here