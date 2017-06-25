const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('SERVER', () => {
    describe('GET /', () => {
        it('should return hello there response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({ error: 'page not found' });
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        //should return 200 status, you exist in user array
        it('should return 200, you exist in array', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({ name: 'test2', age: '4' });
                })
                .end(done);
        });

    });
});





