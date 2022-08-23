const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema({
    movieID: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    leading: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    releaseyear: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    youtube: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
    },
    userfav: {
        userID: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('180570220_movies', Movie)