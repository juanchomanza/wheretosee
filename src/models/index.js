const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");


Actor.belongsToMany(Movie, {through: "movieActors"})
Movie.belongsToMany(Actor, {through: "movieActors"})

Genre.belongsToMany(Movie, {through: "movieGenres"})
Movie.belongsToMany(Genre, {through: "movieGenres"})

Director.belongsToMany(Movie, {through: "movieDirectors"})
Movie.belongsToMany(Director, {through: "movieDirectors"})