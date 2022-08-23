const { model } = require('mongoose')
const Movie = require('../models/movieModel')

// get movies list
getMovies = async (req, res) => {
    await Movie.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}

// get one movie by id
getMovieById = async (req, res) => {
    await Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}


// get movies list by search
getMovieBySearch = async (req, res) => {
    await Movie.find({ title: {'$regex': req.params.search, '$options': 'i'} }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

// update average rating
updateRating = async (req, res) => {
    const body = req.body
    await Movie.findOneAndUpdate(
        {
            _id: body.movieID
        },
        {
            $set: {rating: body.avgRating}
        }, 
        function(err, movie){
            if (err){
                return res.status(400).json({ success: false, error: err })
            }

            if (!movie){
                return res.status(404).json({ success: false, error: "Movie not found" })
            }
            return res.status(200).json({ success: true, data: movie, message: "updated" })
        }
    ).catch(err => console.log(err))
}

// add to favourite movie
addFav = async (req, res) => {
    const body = req.body
    await Movie.findOneAndUpdate(
        {
            _id: body.movieID
        },
        {
            "$push": {userfav: {userID: body.userID}}
        }, 
        function(err, movie){
            if (err){
                return res.status(400).json({ success: false, error: err })
            }

            if (!movie){
                return res.status(404).json({ success: false, error: "Movie not found" })
            }
            return res.status(200).json({ success: true, data: movie, message: "updated" })
        }
    ).catch(err => console.log(err))
}

// remove from favourite movie
removeFav = async (req, res) => {
    const body = req.body
    await Movie.findOneAndUpdate(
        {
            _id: body.movieID
        },
        {
            $pull: {userfav: {userID: body.userID}}
        }, 
        function(err, movie){
            if (err){
                return res.status(400).json({ success: false, error: err })
            }

            if (!movie){
                return res.status(404).json({ success: false, error: "Movie not found" })
            }
            return res.status(200).json({ success: true, data: movie, message: "updated" })
        }
    ).catch(err => console.log(err))
}

// get favourite
getFav = async (req, res) => {
    const body = req.body
    await Movie.findOne(
        {
            _id: body.movie, userfav: {userID: body.user}
        },
        function(err, movie){
            if (err){
                return res.status(400).json({ success: false, error: err })
            }

            if (!movie){
                return res.status(200).json({ success: true, data: false })
            }
            return res.status(200).json({ success: true, data: true })
        }
    ).catch(err => console.log(err))
}

// get favourite movie list
getFavMovie = async (req, res) => {
    await Movie.find({userfav: {userID: req.params.id}}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}

module.exports = {
    getMovies,
    getMovieById,
    getMovieBySearch,
    updateRating,
    addFav,
    removeFav,
    getFav,
    getFavMovie
}