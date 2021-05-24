const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true,
        match: /^https?/
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;