const Redis = require('ioredis');
const serverConfig = require( "./serverConfig.js");

const redisConnection = new Redis({
    host: serverConfig.REDIS_HOST, 
    port: serverConfig.REDIS_PORT,
    maxRetriesPerRequest: null,
    enableReadyCheck: true,
});
// const redisConnection = new Redis(redisConfig);
module.exports =  redisConnection;