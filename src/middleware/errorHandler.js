const logger = require('../utils/logger');

module.exports = (err, req, res, next) => {
  logger.error(`Handling Error: ${err.stack}`);

  next(); // TODO: unknown use case of `next`
  return res.status(500).json('Server has encountered an unexpected error');
};
