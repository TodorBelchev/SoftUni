const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
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
    duration: {
        type: String,
        required: true
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
    enrolledUsers: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;