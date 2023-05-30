const request = require('supertest');
const app = require('../app.js');

let actorId;

test('POST /actors should be 201', async () => {
    const createActor = {
        firstName : 'Juancho',
        lastName: 'Manza',
        nationality : 'Colombia',
        image : 'asdasdas.jpg',
        birthday:  '2000-07-05'
    }
    const res = await request(app).post('/actors').send(createActor)
    actorId = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    
});

test('GET /actors should be 200', async () => {
    const res = await request(app).get('/actors')
    expect(res.status).toBe(200);
});

test('PUT /actors:id should be 200', async () => {
    const editActor = {
        firstName: 'Juan' }

    const res = await request(app).put('/actors/'+actorId).send(editActor)
    expect(res.status).toBe(200);
});


test('DELETE /actors:id should be 200', async () => {
    const res = await request(app).delete('/actors/'+actorId)
    expect(res.status).toBe(204);
});