const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Accessory name is required!'],
        minLength: [5, 'Accessory name must be at least 5 characters long!'],
        match: [/^[a-zA-Z0-9 ]+$/, 'Accessory name must contains only english letters, digits and whitespace!']
    },
    imageURL: {
        type: String,
        required: [true, 'Image URL is required!'],
        match: [/^https?/, 'Invalid image URL!']
    },
    description: {
        type: String,
        required: [true, 'Accessory description is required!'],
        minLength: [20, 'Accessory description must be between 20 and 50 characters long!'],
        maxLength: [50, 'Accessory description must be between 20 and 50 characters long!'],
        match: [/^[a-zA-Z0-9 ]+$/, 'Accessory description must contains only english letters, digits and whitespace!']
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;