const mongoose = require('mongoose');

// connect database
mongoose
    .connect('mongodb://127.0.0.1:27017/180570220_movierating', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })
   
const db = mongoose.connection

module.exports = db;