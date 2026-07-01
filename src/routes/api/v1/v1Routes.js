async function v1plugin(fastify, options){
    fastify.register(require('./test/testroute'), {prefix: '/test'})
}

module.exports = v1plugin;