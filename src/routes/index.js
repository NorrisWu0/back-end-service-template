const express = require('express');

const router = express.Router();
const {
  helloWorld,
  greeting,
  throwError
} = require('../controllers/helloStranger');

router.get('/hello', helloWorld);
router.post('/greet', greeting);
router.get('/error', throwError);

// 404 Route
router.all('*', (req, res) =>
  res.status(404).json('This API you requesting does not exist')
);

module.exports = router;
