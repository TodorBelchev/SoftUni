
const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    freeRooms: {
        type: Number,
        required: true
    },
    usersBooked: {
        type: [{
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }],
        default: []
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;