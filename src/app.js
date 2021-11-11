require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const router = require('./routes');

const app = express();
app.use(cors());
app.use(
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev')
);
app.use(helmet());

app.use('/api/v1', router);

module.exports = app;
