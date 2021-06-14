const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Hotel name is required!'],
        unique: true,
        minLength: [4, 'Hotel name must be at least 4 characters long!']
    },
    city: {
        type: String,
        required: [true, 'City name is required!'],
        minLength: [3, 'City name must be at least 3 characters long!']
    },
    imgURL: {
        type: String,
        required: [true, 'Image URL is required!'],
        match: [/^https?/, 'Invalid image URL!']
    },
    freeRooms: {
        type: Number,
        required: [true, 'Free rooms field is required!'],
        min: [1, 'Free rooms must be between 1 and 100!'],
        max: [100, 'Free rooms must be between 1 and 100!']
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