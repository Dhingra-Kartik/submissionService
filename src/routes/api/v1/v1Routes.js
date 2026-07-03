async function v1plugin(fastify, options){
    fastify.register(require('./test/testroute'), {prefix: '/test'});
    fastify.register(require('./submissionRoutes'), {prefix: '/submissions'})
}

module.exports = v1plugin;