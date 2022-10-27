const app = require('../app')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app)


describe('Test Handlers', () => {
    test('responds to post /user', async () => {
        const res = await request.post('/user').send(    {
            _id: '12345678',          
            given_name: "William",
            family_name: "Turner",
            nickname: "will",
            name: 25,
            picture: null,
            locale: null,
            updated_at: null,
            email: "johnturner@gmail.com",
            email_verified: null,
            sub: null,
            sid: null,
        });
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(201)
    })

    
})