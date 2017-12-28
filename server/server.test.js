const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server test suite', () => {

    describe('GET', () => {

        describe('/', () => {
            
            it('should return a Karibu Dunya response', (done) => {
                request(app)
                    .get('/')
                    .expect(404)
                    .expect((res) => {
                        expect(res.body).toInclude({
                            error: 'Page not found.'
                        })
                    })
                    .end(done);
            });

        });

        describe('/users', () => {

            it('should return an array of users', (done) => {
                request(app)
                    .get('/users')
                    .expect(200)
                    .expect((res) => {
                        expect(res.body).toInclude({
                            name: 'tito',
                            age: '55'
                        });
                    })
                    .end(done);
            });

        });

    });

});