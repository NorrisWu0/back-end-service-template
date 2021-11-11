const logger = require('./utils/logger');
const connectDatabase = require('./models/database');
const app = require('./app');

const PORT = process.env.PORT || 3000;

connectDatabase();
app.listen(PORT, () => {
  logger.info(`listening on port ${PORT}`);
});
