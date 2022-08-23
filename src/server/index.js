const express = require('express') // express
const bodyParser = require('body-parser') // body-parser
const cors = require('cors') // cors

const db = require('./db') // db
const movieRouter = require('./routes/movieRouter') // movieRouter
const userRouter = require('./routes/userRouter') // userRouter
const ratingRouter = require('./routes/ratingRouter') //ratingRouter

const app = express()
const apiPort = 3000 // api port

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:')) // connect db

app.get('/', (req, res) => {
    res.send('Movie')
})

app.use('/api', movieRouter) // api for movie

app.use('/user', userRouter) // api for login

app.use('/rating', ratingRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))