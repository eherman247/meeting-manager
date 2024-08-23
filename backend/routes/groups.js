const express = require('express')
const {
    createGroup,
    getGroup,
    getGroups
} = require("../controllers/groupController")

const router = express.Router()

router.get('/', getGroups)

router.get('/:id', getGroup)

router.post('/', createGroup)

router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router