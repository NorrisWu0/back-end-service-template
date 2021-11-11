const request = require('supertest');
const app = require('../app');

describe('Error API', () => {
  it('should throw an expected exception', async () => {
    const { status, body } = await request(app).get('/api/v1/error');

    expect(status).toEqual(500);
    expect(body).toBe('Server has encountered an unexpected error');
  });

  it('should return "This API you requesting does not exist" with 404', async () => {
    const { status, body } = await request(app).get('/api/v1/not-exist');

    expect(status).toEqual(404);
    expect(body).toBe('This API you requesting does not exist');
  });
});
