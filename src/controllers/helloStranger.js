const _ = require('lodash');
const logger = require('../utils/logger');

/**
 * @swagger
 * /api/v1/hello:
 *   get:
 *     tags:
 *       - example
 *     summary: Say hello to world
 *     responses:
 *       200:
 *         description: A message from this express server
 *         content:
 *           application/json:
 *             example: hello world!
 */
const helloWorld = (req, res) => {
  logger.info('hello world');
  return res.status(200).json('hello world!');
};

/**
 * @swagger
 * /api/v1/greet:
 *   post:
 *     tags:
 *       - example
 *     summary: Hi, express server.
 *     requestBody:
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *              example:
 *                name: stranger
 *     responses:
 *       200:
 *         description: Another message from this express server
 *         content:
 *           application/json:
 *             example: hello stranger!
 *       400:
 *         description: Incomplete requesting
 *         content:
 *           application/json:
 *             example: Missing name in request body
 */
const greeting = (req, res) => {
  const { name } = req.body;

  if (_.isEmpty(name)) {
    logger.warn('Request missing required value');
    return res.status(400).json('Missing name in request body');
  }
  return res.status(200).json(`hello ${name}!`);
};

/**
 * @swagger
 * /api/v1/error:
 *   get:
 *     tags:
 *       - example
 *     summary: What exception looks like from this express server
 *     responses:
 *       500:
 *         description: Throw an exception
 *         content:
 *           application/json:
 *             example: Server has encountered an unexpected error
 */
const throwError = () => {
  throw new Error('This is an expected exception');
};

module.exports = {
  helloWorld,
  greeting,
  throwError
};
