const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        String,
        required: true
    },
    password: {
        String,
        required: true
    }
});

const model = mongoose.model('User', schema);

module.exports = model;