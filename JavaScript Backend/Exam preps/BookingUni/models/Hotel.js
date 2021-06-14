const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    freeRooms: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    usersBooked: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;