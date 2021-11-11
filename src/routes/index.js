const express = require('express');
const _ = require('lodash');
const logger = require('../utils/logger');

const router = express.Router();

const helloWorld = (req, res) => {
  logger.info('hello world');
  return res.status(200).json('hello world!');
};

const greeting = (req, res) => {
  const { name } = req.body;

  if (_.isEmpty(name)) {
    logger.warn('Request missing required value');
    return res.status(400).json('Missing name in request body');
  }
  return res.status(200).json(`hello ${name}!`);
};

router.get('/hello', helloWorld);
router.post('/greet', greeting);

module.exports = router;
