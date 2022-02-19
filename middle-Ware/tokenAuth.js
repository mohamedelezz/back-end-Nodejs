
// const express = require('express')
const jwt = require('jsonwebtoken')
// const mongoose = require('mongoose')
const usersCollection = require('../schemas/userSchema')

module.exports = async function (req, res, next) {
    try {
        const getToken = await req.header('authorization')

        if (!getToken) {
            throw new Error('erroe happend not found Token')
        }
        const decodeToken = jwt.verify(getToken, 'hamadakun')

        const finduserInDb = usersCollection.findById({ _id: decodeToken._id })
        if (!finduserInDb) {
            throw new Error('erroe happend id not found Token')
        } 
        next()
    } catch (err) {
        res.status(401).send(err.message)
        }

}

// -------------------------------------------------------------------------------------------




