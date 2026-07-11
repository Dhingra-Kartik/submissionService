const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  REDIS_PORT: process.env.REDIS_PORT || "6379",
  REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
  ATLAS_DB_URL : process.env.ATLAS_DB_URL,
    LOG_DB_URL : process.env.LOG_DB_URL,
    OUR_NODE_ENV : process.env.OUR_NODE_ENV,
    PROBLEM_ADMIN_SERVICE : process.env.PROBLEM_ADMIN_SERVICE,
    SOCKETSERVICE : process.env.SOCKETSERVICE
}