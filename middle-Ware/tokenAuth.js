
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
// const jwt=require('jsonwebtoken')
// const User = require('../schemas/userSchema')

// module.exports = function (req, res, next){
//     try{
//         const token = req.header('authorization')
//         if(!token){
//             res.send('error to get token')
//         }
//         const checkToken = jwt.verify(token, 'hamadakun')
//         if(!checkToken){
//             throw new Error("This token not match")
//         }
//         const getUserById = User.findById({_id: checkToken._id})
        
//         next()
//     }catch(err){
//         res.statu(401).send('error happen in middleware')
//     }
// }




