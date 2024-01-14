const supertest = require('supertest');
const app = require('./app');
const request = supertest(app);

describe('/hello-world', () => {
  it('should return a response', async () => {
    const response = await request.get('/hello-world');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world');
  });
});
