const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    bookedHotels: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hotel'
        }],
        default: []
    },
    offeredHotels: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hotel'
        }],
        default: []
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;