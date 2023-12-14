require('dotenv').config()
const cors = require('cors')
const { rateLimit } = require('express-rate-limit')
const express = require('express')
require('./src/config/db')
const cloudinary = require('cloudinary').v2

const app = express()
const { cleanCollections, saveDocuments } = require('./src/repositories/movies')

const seedCollection = async () => {
  await cleanCollections()
  await saveDocuments()
}

seedCollection()

//CLOUDINARY
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

// CORS
app.use(
  cors({
    origin: function (origin, callback) {
      callback(null, true)
    }
  })
)

// LIMITER
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  limit: 100,
  standardHeaders: false,
  legacyHeaders: false
})
app.use(limiter)

//  MIDDLEWARES DE BODY PARSER
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ limit: '1mb', extended: true }))

//Router
const mainRouter = require('./src/routes/index')
app.use('/api', mainRouter)

// Controlador de rutas no encontradas
app.use('*', (req, res, next) => {
  res.status(404).json({ data: 'Not found' })
})

// //Controlador de errores generales del servidor
app.use((err, req, res, next) => {
  console.log(' >>>> Server error:', err)
  res.status(500).json({ data: 'Interval Server Error' })
})

const PORT = 4001
app.listen(PORT, () => {
  console.log(
    `La aplicación está corriendo en el puerto http://localhost:${PORT}`
  )
})

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.disable('x-powered-by')
