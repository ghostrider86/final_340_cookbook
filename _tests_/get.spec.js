const app = require('../app')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app)


describe('Test Handlers', () => {
    test('responds to /', async () => {
        const res = await request.get('/');
        expect(res.header['Access-Control-Allow-Origin', '*']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })

    test('responds to /comments', async () => {
        const res = await request.get('/comments');
        expect(res.header['Access-Control-Allow-Origin', '*']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })

    test('responds to /images', async () => {
        const res = await request.get('/images');
        expect(res.header['Access-Control-Allow-Origin', '*']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })

    test('responds to /recipes', async () => {
        const res = await request.get('/recipes');
        expect(res.header['Access-Control-Allow-Origin', '*']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })
    test('responds to /user', async () => {
        const res = await request.get('/user');
        expect(res.header['Access-Control-Allow-Origin', '*']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })
})