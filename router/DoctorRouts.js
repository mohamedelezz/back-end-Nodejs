const express = require('express')
const route = express.Router();
const doctors = require('../schemas/doctorSchema')
const middleWareToken = require('../middle-Ware/tokenAuth')

route.get('/', async (req, res) => {
    const getAllDoctors = await doctors.find()
    res.send({ status: 'success', data: getAllDoctors })
})

route.get('/:id', async (req, res) => {
    const getAllDoctors = await doctors.findById(req.params.id)
    res.send(getAllDoctors)
})

route.post('/', async (req, res) => {
    try {
        const newDoctors = new doctors(req.body)
        await newDoctors.save()

        res.send(newDoctors)
    } catch (error) { res.send(error.message) }
})

route.delete('/:id', async (req, res) => {
    const deleteDoctor = await doctors.findByIdAndDelete(req.params.id)
    res.send({
        data: "Doctor has delated "
    })
})

route.patch('/:id', async (req, res) => {
    try {
        const deleteDoctor = await doctors.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        res.send({
            data: "Doctor has updated "
        })
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = route