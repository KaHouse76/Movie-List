const { model } = require('mongoose')
const User = require('../models/userModel')

login = async (req, res) => {
    const body = req.body

    await User.findOne({ username: body.username }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        if (body.password != user.password) {
            return res
                .status(401)
                .json({ success: false, error: `Invalid Password` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUser = async(req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}

getUserById = async(req, res) => {
    await User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

module.exports = {
    login,
    getUser,
    getUserById
}