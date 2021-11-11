const logger = require('../utils/logger');

module.exports = (err, res) => {
  logger.error(err);

  if (process.env.NODE_ENV === 'production') {
    if (err.isOperational === true)
      return res.status(err.statusCode).json(err.message);
    return res.status(500).send('Server has encountered an unexpected error');
  }

  return res.status(500).json(err);
};
