const fastifyPlugin = require('fastify-plugin'); //helpe rto ccreate couple of plugins.
const servicePlugin = require('./service/plugService');

async function app(fastify, options){    //a simple JS function signature
    fastify.register(require('@fastify/cors'));

    // fastify.register(require('./routes/api/test/testroute'), {prefix: '/api'});
    fastify.register(require('./routes/api/apiRoutes'), {prefix: '/api'});
    

    fastify.register(servicePlugin);

}

module.exports = fastifyPlugin(app);  //becomes a fastify plugin here