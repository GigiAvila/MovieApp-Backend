const express = require('express')
const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
} = require('../controllers/movies')
const uploadMiddleware = require('../middleware/file')
const router = express.Router()

router.get('/', getAllMovies)
router.get('/:id', getMovieById)
router.post('/', uploadMiddleware, createMovie)
router.put('/:id', uploadMiddleware, updateMovie)
router.delete('/:id', deleteMovie)

module.exports = router
