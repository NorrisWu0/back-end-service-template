const request = require('supertest');
const app = require('../app');

describe('Hello API', () => {
  it('should return hello world with 200', async () => {
    const { status, body } = await request(app).get('/api/v1/hello');

    expect(status).toEqual(200);
    expect(body).toEqual('hello world!');
  });
});
