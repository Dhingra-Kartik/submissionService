const fastify = require('fastify')({ logger: true }); //enable logging, /calling the fastify constructor ==> object ==> you can call various functions on it. 
const app = require('./app');
const connectToDb = require('./config/dbConfig');
const serverConfig = require('./config/serverConfig');
const EvalautionWorker = require('./workers/EvaluationWorker');

fastify.register(app);

fastify.get('/ping', (req, res) => {
  res.send({ data: 'pong' });
});

// fastify.listen({ port: PORT }, async (err) => {
//   if (err) {
//     fastify.log.error(err);
//     process.exit(1);
//   }
//   await connectToDb();
//   console.log(`Server started at port: ${PORT}`);
// });

const start = async () => {
  try {
    await fastify.listen({ port: serverConfig.PORT });
    console.log('Server running...');
    await connectToDb();

    EvalautionWorker("EvaluationQueue");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

