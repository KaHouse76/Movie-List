const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Rating = new Schema({
    userID: {
        type: String,
        required: true,
    },
    movieID: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('180570220_ratings', Rating)