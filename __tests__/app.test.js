const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('it gets a string hi from /', async () => {
    const res = await request(app).get('/');
    expect(res.text).toEqual(
      `HTTP/1.1 200 OK\r
Content-Type: text/plain\r
\r
hi`);
  });
  it('it gets a body from /echo', async () => {
    const res = await request(app).get('/echo');
    expect(res.text).toEqual(`HTTP/1.1 200 OK\r
    Content-Type: text/plain\r
    hi`);
  });
  it('it gets color red from /red', async () => {
    const res = await request(app).get('/red');
    expect(res.text).toEqual(`HTTP/1.1 200 OK\r
    Content-Type: text/plain\r
    \r
    hi`);
  });





});
