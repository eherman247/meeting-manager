const mongoose = require('mongoose')

const Schema = mongoose.Schema

const createGroupSchema = new Schema({
    group_name: {
        type: String,
    },
    // user: {
    //     type: String
    // }
    user: {
        firstName: {type: String},
        lastName: {type: String}
    }
    // group_password: {
    //     type: String
    // },
    // global_admin_privileges: {
    //     type: Boolean
    // },
    // mon_timeframe: {
    //     start: {type: Number},
    //     end: {type: Number}
    // },
    // tues_timeframe: {
    //     start: {type: Number},
    //     end: {type: Number}
    // },
    // wed_timeframe: {
    //     start: {type: Number},
    //     end: {type: Number}
    // },
    // thur_timeframe: {
    //     start: {type: Number},
    //     end: {type: Number}
    // },
    // fri_timeframe: {
    //     start: {type: Number},
    //     end: {type: Number}
    // },
    // sat_timeframe: {
    //     start: {type: Number},
    //     end: {type: Number}
    // },
    // sun_timeframe: {
    //     start: {type: Number},
    //     end: {type: Number}
    // }

}, {timestamps: true})

module.exports = mongoose.model('Create_Group_Model', createGroupSchema)
