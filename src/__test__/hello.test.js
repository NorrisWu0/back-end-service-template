const request = require('supertest');
const logger = require('../utils/logger');
const app = require('../app');

logger.info('Starting Test');

describe('This app', () => {
  it('should return hello world with 200', async () => {
    const { status, body } = await request(app).get('/api/v1/hello');

    expect(status).toEqual(200);
    expect(body).toEqual('hello world!');
  });
});
