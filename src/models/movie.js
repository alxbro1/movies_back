const mongoose = require('mongoose');

const movieSchema  = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "the tittle is required"],
},
year: {
    type: Number,
    required: [true, "the year is required"],
    min: [1895, "The year entered must be equal to or greater than 1895"],
    max: [2030, "The year entered must be equal to or less than 2030"],
},
director: {
  type: String,
  required: [true, "the director is required"],
},
duration: {
    type: String,
    required: [true, "a duration is required"],
},
genre: {
    type: Array,
    required: [true,"a genre is required"],
},
rate: {
    type: Number,
    required: [true, "the rate is required"],
    max: [10, "must be less than or equal to 10"],
    min: [1, "must be greater than or equal to 1"],
},
poster: {
    type: String,
    required: [true, "the poster url is required"],
},
  });

const Movie = mongoose.model("movies",movieSchema)

module.exports = Movie