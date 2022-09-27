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

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.use("/api/boards", require("./routes/boards"))

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))
