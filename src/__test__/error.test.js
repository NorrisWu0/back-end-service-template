const request = require('supertest');
const app = require('../app');

describe('Error API', () => {
  it('should throw an expected exception', async () => {
    const { status } = await request(app).get('/api/v1/error');

    expect(status).toEqual(500);
  });
});
