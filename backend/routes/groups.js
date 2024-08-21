const express = require('express')
const Group = require('../models/createGroupModel')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

router.post('/', async (req, res) => {
    const {group_name, user} = req.body
    try{
      const group = await Group.create({group_name, user})
      res.status(200).json(group)
    }catch (error) {
      res.status(400).json({error: error.message})
    }
})

router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router