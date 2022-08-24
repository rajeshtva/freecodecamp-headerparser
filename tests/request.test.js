const request = require('supertest')
const app = require('../app')

describe('/whoami returns required data', () => {
    test('it returns ipaddress in ipaddress', async () => {
        const response = await request(app).get('/api/whoami');
        expect(response.statusCode).toBe(200)
    })
    test.todo('language preference as language')
    test.todo("software is returned.")
})
