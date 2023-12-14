const express = require('express')
const router = express.Router()
const movieRouter = require('./movies')

router.use('/movies', movieRouter)

module.exports = router
