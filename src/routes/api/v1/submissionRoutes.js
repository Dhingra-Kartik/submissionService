const controller = require('../../../controllers/controller');
const authMiddleware = require('../../../middleware/authMiddleware');
async function submissionRoutes(fastify, options){
    fastify.post('/', {
      preHandler: authMiddleware,
    }, controller.createSubmission)}

module.exports = submissionRoutes;
