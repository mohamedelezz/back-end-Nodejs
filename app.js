const express = require('express')
const app = express()
const doctorRoute = require('./router/DoctorRouts')
const userRouter = require('./router/signUpUserRouter')
const signIn = require('./router/signInUserRouter')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.connect('mongodb+srv://mohamedezz:0102749@cluster0.amhpv.mongodb.net/vezeeta?retryWrites=true&w=majority').then(() => {
    console.log(' hello connect mongoose')
}).catch(() => console.log('erroro to connect database'))

port = 3000
app.listen(port, () => {
    console.log(`this app use http://localhost:${3000}`);
})
app.use(cors())
app.use(express.json()) 




app.use('/doctor', doctorRoute)

app.use('/sign-up', userRouter)

app.use('/sign-in', signIn)










app.use((req, res) => {
    res.status(404).send('error req')
})