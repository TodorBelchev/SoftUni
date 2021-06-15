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
        type: String,
        required: true
    },
    usersLiked: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Play = playSchema.model('Play', playSchema);

module.exports = Play;