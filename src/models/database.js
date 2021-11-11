const mongoose = require('mongoose');
const _ = require('lodash');
const logger = require('../utils/logger');

const connectDatabase = () => {
  const { CONNECTION_STRING } = process.env;

  if (_.isEmpty(CONNECTION_STRING)) {
    logger.info('Connection String to database is not defined.');
    process.exit(1);
  }

  const { connection } = mongoose;

  connection.on('connected', () => {
    logger.info(`Connected to database on ${CONNECTION_STRING}`);
  });

  connection.on('error', (error) => {
    logger.error(
      'There is an error with the connection to MongoDB database',
      error.message
    );
  });

  connection.on('disconnected', () => {
    logger.info('Disconnected to database');
  });

  return mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true
  });
};

module.exports = connectDatabase;
