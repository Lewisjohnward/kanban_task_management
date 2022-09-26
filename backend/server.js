require('dotenv').config({path: './config.env'})
const connectDB = require('./config/db')
const express = require('express')

connectDB()

const PORT = process.env.PORT || 3005

const app = express()
app.use(express.json())

app.get("/", (req, res, next) => {
    res.send("Api running")
})

app.use("/api/boards", require("./routes/boards"))

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))
