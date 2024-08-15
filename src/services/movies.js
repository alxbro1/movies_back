const Movie = require("../models/movie");

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },
  addMovie: async (movie) => {
      movie.genre = movie.genre.split("#");
      const moviee = new Movie(movie);
      const response = await moviee.save();
      return response;
  },
};
