const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: true,
        match: [/^[a-zA-Z0-9]+$/, 'Username must contains only english letters and digits!'],
        minLength: [5, 'Username must be at least 5 characters long!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        match: [/^[a-zA-Z0-9]+$/, 'Password must contains only english letters and digits!'],
        minLength: [8, 'Password must be at least 8 characters long!']
    }
});

schema.pre('save', async function (next) {
    try {
        const hashed = await bcrypt.hash(this.password, 10);
        this.password = hashed;
        next;
    } catch (error) {
        throw new Error(error.message);
    }
});

const model = mongoose.model('User', schema);

module.exports = model;