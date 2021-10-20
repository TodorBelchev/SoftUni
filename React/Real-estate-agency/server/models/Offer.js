const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    homeName: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    homeImage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    availablePieces: {
        type: Number,
        required: true
    },
    rentedUsers: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        default: []
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;