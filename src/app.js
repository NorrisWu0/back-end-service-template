require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');

const router = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const swaggerJsDoc = require('./swagger');

const app = express();
app.use(cors());
app.use(
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev')
);
app.use(helmet());

app.use(express.json());
app.use('/api/v1', router);
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));

app.use(errorHandler);

module.exports = app;
