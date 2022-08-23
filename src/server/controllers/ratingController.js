const { model } = require('mongoose')
const Rating = require('../models/ratingModel')

getAvgRating = async(req, res) => {
    await Rating.aggregate(
        [
            {
                "$match":{
                    "movieID": req.params.id
                }
            },
            {
                "$group":{
                    "_id": "$movieID",
                    "avgRating": { "$avg": {"$ifNull":["$rating", 0]}}
                }
            }
        ], (err, avgRating) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
            if (!avgRating) {
                return res
                    .status(404)
                    .json({ success: false, error: `Rating not found` })
            }
            return res.status(200).json({ success: true, data: avgRating })
    }).catch(err => console.log(err))
}

getUserRating = async(req, res) => {
    await Rating.findOne({ userID: req.params.userID, movieID: req.params.movieID }, (err, rating) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!rating) {
            return res
                .status(200)
                .json({ success: false, error: "Rating not found" })
        }
        return res.status(200).json({ success: true, data: rating })
    }).catch(err => console.log(err))
}

updateRating = async (req, res) => {
    const body = req.body
    await Rating.findOneAndUpdate(
        {
            userID: body.userID, movieID: body.movieID
        },
        {
            $set: {rating: body.rating}
        }, 
        function(err, rating){
            if (err){
                return res.status(400).json({ success: false, error: err })
            }

            if (!rating){
                const newRating = new Rating(body)
                newRating.save()
            }
            return res.status(200).json({ success: true, data: rating })
        }
    ).catch(err => console.log(err))
}

module.exports = {
    getAvgRating,
    getUserRating,
    updateRating
}