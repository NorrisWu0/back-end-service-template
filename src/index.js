const logger = require('./utils/logger');
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`listening on port ${PORT}`);
});
