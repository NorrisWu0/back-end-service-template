const express = require('express');
const logger = require('../utils/logger');

const router = express.Router();

const helloWorld = (req, res) => {
  logger.info('hello world');
  return res.status(200).json('hello world!');
};

router.use('/hello', helloWorld);

module.exports = router;
