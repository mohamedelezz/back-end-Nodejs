const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../schemas/userSchema')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const middleWare = require('../middle-Ware/tokenAuth')

router.post('/', async (req, res) => {
    try {
        const usersign = await User.findOne({ email: req.body.email })
        if (!usersign) {
            throw new Error('email or pass invalid')

        }
        const checkPass = await bcrypt.compare(req.body.password, usersign.password)
        if (!checkPass) {
            throw new Error('email or pass invalid')
        }
        const tokens = await jwt.sign({ _id: req.body._id }, "hamadakun")
        res.send({
            status: "Successful",
            token: tokens
        });
    } catch (error) {
        res.send(error.message)
    }
})


module.exports = router


