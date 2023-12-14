const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'MovieApp',
    allowedFormats: ['jpg', 'jpeg', 'png', 'gif']
  }
})

const uploadMiddleware = multer({
  storage: storage
}).fields([
  { name: 'cover', maxCount: 1 },
  { name: 'preview', maxCount: 1 }
])

module.exports = uploadMiddleware
