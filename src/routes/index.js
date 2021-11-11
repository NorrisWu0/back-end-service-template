const express = require('express');
const _ = require('lodash');
const logger = require('../utils/logger');

const router = express.Router();

const helloWorld = (req, res) => {
  logger.info('hello world');
  return res.status(200).json('hello world!');
};
router.get('/hello', helloWorld);

const greeting = (req, res) => {
  const { name } = req.body;

  if (_.isEmpty(name)) {
    logger.warn('Request missing required value');
    return res.status(400).json('Missing name in request body');
  }
  return res.status(200).json(`hello ${name}!`);
};
router.post('/greet', greeting);

const throwError = () => {
  throw new Error('This is an expected exception');
};

router.get('/error', throwError);

module.exports = router;
