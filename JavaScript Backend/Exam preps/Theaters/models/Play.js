const mongoose = require('mongoose');

const playSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
    imageUrl: {
        type: String,
        required: true
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    usersLiked: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Play = mongoose.model('Play', playSchema);

module.exports = Play;