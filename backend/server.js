require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const groupRoutes = require('./routes/groups')

// express app
const app = express()

// middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE"]
}))
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/groups', groupRoutes)

// connect to db
mongoose.connect(process.env.ATLAS_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })


