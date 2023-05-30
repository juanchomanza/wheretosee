const request = require('supertest');
const app = require('../app.js');

let directorId;

test('POST /directors should be 201', async () => {
    const createDirector = {
        firstName : 'El mamo',
        lastName: 'Gonzales',
        nationality : 'EEUU',
        image : 'asdasdasasdsd.jpg',
        birthday:  '2002-02-25'
    }
    const res = await request(app).post('/directors').send(createDirector)
    directorId = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    
});

test('GET /directors should be 200', async () => {
    const res = await request(app).get('/directors')
    expect(res.status).toBe(200);
});

test('PUT /directors:id should be 200', async () => {
    const editActor = {
        firstName: 'Camilo' }

    const res = await request(app).put('/directors/'+directorId).send(editActor)
    expect(res.status).toBe(200);
});


test('DELETE /directors:id should be 200', async () => {
    const res = await request(app).delete('/directors/'+directorId)
    expect(res.status).toBe(204);
});