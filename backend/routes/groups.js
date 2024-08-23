const express = require('express')
const {
    createGroup,
    getGroup,
    getGroups,
    deleteGroup,
    updateGroup
} = require("../controllers/groupController")

const router = express.Router()

router.get('/', getGroups)

router.get('/:id', getGroup)

router.post('/', createGroup)

router.delete('/:id', deleteGroup)

router.patch('/:id', updateGroup)

module.exports = router