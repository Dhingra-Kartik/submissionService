const fastify = require('fastify')({ logger: true }); //enable logging, /calling the fastify constructor ==> object ==> you can call various functions on it. 
const app = require('./app');
const PORT = 3000;  

fastify.register(app);

fastify.get('/ping', (req, res) => {
  res.send({ data: 'pong' });
});

fastify.listen({ port: PORT }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server started at port: ${PORT}`);
});
