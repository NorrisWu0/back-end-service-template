const request = require('supertest');
const logger = require('../utils/logger');
const app = require('../app');

logger.info('Starting Test');

describe('This app', () => {
  it('should return "hello {name}" with 200', async () => {
    const { status, body } = await request(app)
      .post('/api/v1/greet')
      .send({ name: '打工人' });

    expect(status).toEqual(200);
    expect(body).toEqual('hello 打工人!');
  });

  it('should return "Missing name in request body" with 400', async () => {
    const { status, body } = await request(app).post('/api/v1/greet');

    expect(status).toEqual(400);
    expect(body).toEqual('Missing name in request body');
  });
});
