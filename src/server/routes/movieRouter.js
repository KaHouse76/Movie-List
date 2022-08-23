const express = require('express')

const movieController = require('../controllers/movieController')

const router = express.Router()

router.get('/movies', movieController.getMovies)
router.get('/movie/:id', movieController.getMovieById)
router.get('/movies/:search', movieController.getMovieBySearch)
router.post('/updateRating', movieController.updateRating)
router.post('/addFav', movieController.addFav)
router.post('/removeFav', movieController.removeFav)
router.post('/fav', movieController.getFav)
router.get('/favMovies/:id', movieController.getFavMovie)

module.exports = router