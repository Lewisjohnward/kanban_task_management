require('dotenv').config({path: './config.env'})
const connectDB = require('./config/db')
const express = require('express')

connectDB()

const PORT = process.env.PORT || 3005

const app = express()

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))
