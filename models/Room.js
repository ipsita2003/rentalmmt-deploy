const { ServerDescription } = require('mongodb')
const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    maxcount:{
        type: Number,
        required: true
    },
    phonenumber:{
        type: Number,
        required: true
    },
    rentperday:{
        type: Number,
        required: true
    },
    
    type: {
        type : String,
        required: true
    },
    description: {
        type : String,
        required: true
    }
    // image: {
    //     type: String,
    //     required: true
    // }
    
},
)
module.exports = Room = mongoose.model('Rooms',RoomSchema);