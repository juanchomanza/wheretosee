const request = require('supertest');
const app = require('../app.js');

let genreId;

test('POST /genres should be 201', async () => {
    const createGenre = {
        name : 'Adventuree'
    }
    const res = await request(app).post('/genres').send(createGenre)
    genreId = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    
});

test('GET /genres should be 200', async () => {
    const res = await request(app).get('/genres')
    expect(res.status).toBe(200);
});

test('PUT /genres:id should be 200', async () => {
    const editGenre = {
        name: 'Adventure' }

    const res = await request(app).put('/genres/'+genreId).send(editGenre)
    expect(res.status).toBe(200);
});


test('DELETE /genres:id should be 200', async () => {
    const res = await request(app).delete('/genres/'+genreId)
    expect(res.status).toBe(204);
});