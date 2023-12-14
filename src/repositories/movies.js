const seed = require('../seed/seedData')
const { Movie } = require('../models/movies')

const cleanCollections = async () => {
  await Movie.collection.drop()

  console.log('>>> Colecciones limpias!')
}
const saveDocuments = async () => {
  const movies = await Movie.insertMany(seed)
  console.log('>>>> Documentos guardados con éxito')

  return {
    movies
  }
}

const getAllMoviesFromDB = async (filter) => {
  const movieFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') }
  }
  const movies = await Movie.find(filter ? movieFilterOptions : {})
  return movies
}

const getMovieByIdFromDB = async (id) => {
  const movie = await Movie.findById(id)
  return movie
}

const createMovieInDB = async (payload) => {
  const newMovie = new Movie(payload)
  await newMovie.save()

  return newMovie
}

const updateMovieByIdInDB = async (id, payload) => {
  const movie = await Movie.findByIdAndUpdate(id, payload, { new: true })
  return movie
}

const deleteMovieFromDB = async (id) => {
  await Movie.deleteOne({ _id: id })
}

module.exports = {
  cleanCollections,
  saveDocuments,
  getAllMoviesFromDB,
  getMovieByIdFromDB,
  createMovieInDB,
  updateMovieByIdInDB,
  deleteMovieFromDB
}
