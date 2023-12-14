const {
  getAllMoviesFromDB,
  getMovieByIdFromDB,
  createMovieInDB,
  updateMovieByIdInDB,
  deleteMovieFromDB
} = require('../repositories/movies')

const getAllMovies = async (req, res, next) => {
  const { filter } = req.query
  const movies = await getAllMoviesFromDB(filter)
  res.status(200).json({ data: movies })
}

const getMovieById = async (req, res, next) => {
  const { id } = req.params
  const movies = await getMovieByIdFromDB(id)
  res.status(200).json({ data: movies })
}

const createMovie = async (req, res, next) => {
  const newMovie = await createMovieInDB({
    name: req.body.name,
    director: req.body.director,
    year: req.body.year,
    actor: req.body.actor,
    oscar: req.body.oscar,
    resume: req.body.resume,
    genre: req.body.genre,
    score: req.body.score,
    keywords: req.body.keywords,
    preview: req.files['preview'] ? req.files['preview'][0].path : undefined,
    cover: req.files['cover'] ? req.files['cover'][0].path : undefined
  })
  res.status(201).json({ data: newMovie })
}

const updateMovie = async (req, res, next) => {
  const { id } = req.params

  const updatedMovieInfo = {
    name: req.body.name,
    director: req.body.director,
    year: req.body.year,
    actor: req.body.actor,
    oscar: req.body.oscar,
    resume: req.body.resume,
    genre: req.body.genre,
    score: req.body.score,
    keywords: req.body.keywords,
    preview: req.files['preview'] ? req.files['preview'][0].path : undefined,
    cover: req.files['cover'] ? req.files['cover'][0].path : undefined
  }

  const updatedMovie = await updateMovieByIdInDB(id, updatedMovieInfo)
  res.status(200).json({ data: updatedMovie })
}

const deleteMovie = async (req, res, next) => {
  const { id } = req.params

  await deleteMovieFromDB(id)
  res.status(200).json({ data: `Ok. Deleted movie with id: ${id}` })
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
}
