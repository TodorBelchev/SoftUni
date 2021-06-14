const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { salt_rounds } = require('../config');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bookedHotels: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotel'
    }],
    offeredHotels: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotel'
    }]
});

userSchema.pre('save', async function(next){
    try {
        const hashed = await bcrypt.hash(this.password, salt_rounds);
        this.password = hashed;
        next();
    } catch (error) {
        throw new Error(error.message);
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;