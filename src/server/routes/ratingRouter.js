const express = require('express')

const ratingController = require('../controllers/ratingController')

const router = express.Router()

router.get('/avgRating/:id', ratingController.getAvgRating)
router.get('/user/:userID/:movieID', ratingController.getUserRating)
router.post('/updateRating', ratingController.updateRating)

module.exports = router