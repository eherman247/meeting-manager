const Group = require('../models/createGroupModel')

// get all groups

// get a single group

// create a new group
const createGroup = async (req, res) => {
    const {group_name, user} = req.body

    // add to db
    try{
      const group = await Group.create({group_name, user})
      res.status(200).json(group)
    }catch (error) {
      res.status(400).json({error: error.message})
    }
}

// delete a group 

// update a group

module.exports = {
    createGroup
}