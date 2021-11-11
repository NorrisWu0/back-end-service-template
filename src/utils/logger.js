const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'HH:mm:ss' }),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level} ${info.message}`
    )
  ),
  transports: [new winston.transports.Console()]
});

module.exports = logger;
