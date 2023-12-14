const mongoose = require('mongoose')

const movieGenres = [
  'Action',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'Film Noir',
  'History',
  'Horror',
  'Music',
  'Musical',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Sport',
  'Superhero',
  'Thriller',
  'War',
  'Western'
]

const moviesSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  director: { type: String, required: false, trim: true },
  year: { type: Number, required: false, trim: true },
  actor: { type: String, required: false, trim: true },
  oscar: { type: Boolean, required: false, trim: true },
  resume: { type: String, require: false, trim: true },
  cover: { type: String, required: false, trim: true },
  genre: { type: String, enum: movieGenres, required: false, trim: true },
  score: { type: Number, required: false, trim: true },
  preview: { type: String, required: false, trim: true },
  keywords: [{ type: String, required: false, trim: true }]
})

const Movie = mongoose.model('Movie', moviesSchema)

module.exports = {
  Movie
}
