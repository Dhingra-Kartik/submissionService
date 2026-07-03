const controller = require('../../../controllers/controller');
async function submissionRoutes(fastify, options){
    fastify.post('/', controller.createSubmission)}

module.exports = submissionRoutes;
