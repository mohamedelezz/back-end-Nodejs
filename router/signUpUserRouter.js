const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken')
const bycrpt = require('bcrypt');
const User = require('../schemas/userSchema');
const saultRound = 10;

router.post('/', async (req, res) => {
    try {
        req.body.password = await bycrpt.hash(req.body.password,saultRound)
        const user = new User(req.body)
        await user.save()
        const token = jwt.sign({_id: user._id}, "hamadakun")
        res.send({
            "token" : token,
            "data" : user
        })
    }catch(error){
        res.send(error.message)
    }
})

module.exports = router