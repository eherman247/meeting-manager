require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const createGroupRoutes = require('./routes/groups')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/groups', createGroupRoutes)

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


