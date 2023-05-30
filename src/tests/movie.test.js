const request = require('supertest');
const app = require('../app.js');
const Actor = require('../models/Actor');
const Director = require('../models/Director');
const Genre = require('../models/Genre');
const Movie = require('../models/Movie');
require('../models')
let movieId;

test('POST /movies should be 201', async () => {
    const createMovie = {
        name : 'Adventuree',
        image: 'iamaimagesoproxd.jpg',
        synopsis: 'MUCHOIOOOOO TEXTOOOOOOOOOOO',
        releaseYear: 2000
    }
    const res = await request(app).post('/movies').send(createMovie)
    movieId = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    
});

test('GET /movies should be 200', async () => {
    const res = await request(app).get('/movies')
    expect(res.status).toBe(200);
});

test('PUT /movies:id should be 200', async () => {
    const editMovie = {
        name: 'Adventure' }

    const res = await request(app).put('/movies/'+movieId).send(editMovie)
    expect(res.status).toBe(200);
});


test('POST /movies/:id/actors should be 200', async () => {
    const createActor = {
        firstName : 'Juancho',
        lastName: 'Manza',
        nationality : 'Colombia',
        image : 'asdasdas.jpg',
        birthday:  '2000-07-05'
    }
    const actor = await Actor.create(createActor)
    const res = await request(app).post(`/movies/${movieId}/actors`).send([actor.id])
    actor.destroy()
    expect(res.status).toBe(200);
});

test('POST /movies/:id/directors should be 200', async () => {
    const createDirector = {
        firstName : 'Fernando',
        lastName: 'Torres',
        nationality : 'Colombia',
        image : 'asdsddxxxzzzasasxDD.jpg',
        birthday:  '2000-01-15'
    }
    const director = await Director.create(createDirector)
    const res = await request(app).post(`/movies/${movieId}/directors`).send([director.id])
    director.destroy()
    expect(res.status).toBe(200);
});

test('POST /movies/:id/genres should be 200', async () => {
    const createGenre = {
        name : 'Action',    
    }
    const genre = await Genre.create(createGenre)
    const res = await request(app).post(`/movies/${movieId}/genres`).send([genre.id])
    genre.destroy()
    expect(res.status).toBe(200);
});


test('DELETE /movies:id should be 200', async () => {
    const res = await request(app).delete('/movies/'+movieId)
    expect(res.status).toBe(204);
});