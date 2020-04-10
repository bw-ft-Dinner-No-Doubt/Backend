const request = require('supertest');
const server = require('./server');

//ENV TEST
it('should set the db environment to testing', () => {
    expect(process.env.DB_ENV).toBe("testing")
})

//GET
describe('api-router', () => {
    describe('GET /', () => {
        it('should return 200 OK', () => {
             return request(server).get('/api').then(res => {
                 expect(res.status).toBe(200);
             })
        })
        it('should return JSON formatted response', () => {
            return request(server)
            .get('/api')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
        it('should return an api property with a value of running', () => {
            return request(server)
            .get('/api')
            .then(res => {
                expect(res.body).toEqual({ api: "running"});
                expect(res.body.api).toBe("running");
            })
        })
    })
})