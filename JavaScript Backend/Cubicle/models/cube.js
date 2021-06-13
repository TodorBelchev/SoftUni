const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Cube name is required!'],
        minLength: [5, 'Cube name must be at least 5 characters long!'],
        match: [/^[a-zA-Z0-9 ]+$/, 'Cube name must contains only english letters, digits and whitespace!']
    },
    description: {
        type: String,
        required: [true, 'Cube description is required!'],
        minLength: [20, 'Cube description must be between 20 and 50 characters long!'],
        maxLength: [50, 'Cube description must be between 20 and 50 characters long!'],
        match: [/^[a-zA-Z0-9 ]+$/, 'Cube description must contains only english letters, digits and whitespace!']
    },
    imageURL: {
        type: String,
        required: [true, 'Image URL is required!'],
        match: [/^https?/, 'Invalid image URL!']
    },
    difficultyLevel: {
        type: Number,
        required: [true, 'Difficulty level is required!'],
        min: 1,
        max: 6
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;