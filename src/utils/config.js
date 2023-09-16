require('dotenv').config();

const config = {
  app: {
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT,
  },
};

module.exports = config;
