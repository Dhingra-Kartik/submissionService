const  { Queue }= require( "bullmq");
const  redisConnection = require( "../config/redisConfig.js");

module.exports =  new Queue('SubmissionQueue', {connection: redisConnection });  //if exeist keep as it is, otherwise make a new one.
