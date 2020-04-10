const request = require('supertest');
const server = require('../api/server');

//GET DINER
describe('diner-router', () => {
    describe('GET /diner', () => {
        it('should return 200 OK', () => {
            return request(server).get('/api/diner')
            .send({
                authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkYW0iLCJyb2xlIjoiZGluZXIiLCJpYXQiOjE1NzQwNDQ1ODUsImV4cCI6MTU3NDA0ODE4NX0.JztfbeK7vDXscnVFMhSEhUmVsIccig0sI0szzPvnc8k"
            })
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return JSON response', () => {
            return request(server)
            .get('/api/diner')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
})

//POST DINER
describe('diner-router', () => {
    describe('POST /diner', () => {
        it('should return 201 Created', () => {
            return request(server)
            .post('/api/diner')
            .send({
                username: "adam",
                password: "payne",
                email: "gmail"
            })
            .then(res => {
                expect(res.status).toBe(201);
            })
        })
        it('should return JSON response', () => {
            return request(server)
            .post('/api/diner')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
})

//DELETE DINER (PASSED)
describe('diner-router', () => {
    describe('DELETE /diner', () => {
        it('should return 200 OK', () => {
            return request(server)
            .delete('/api/diner')
            .send({
                id: 3
            })
            .then(res => {
                expect(res.status).toBe(200);
            })  
        })
        it('should return JSON response', () => {
            return request(server)
            .delete('/api/diner')
            .then(res => {
                expect(res.type).toMatch("text/html");
            })
        })
    })
})