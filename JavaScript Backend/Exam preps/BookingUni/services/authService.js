const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { secret } = require('../config');

async function login(username, password) {
    const user = await User.findOne({ username }).lean();

    if (user == null) {
        throw new Error('User not found!');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Invalid password!');
    }

    const token = jwt.sign({ username, _id: user._id }, secret);
    return token;
}

async function register(email, username, password) {
    const user = new User({ email, username, password });

    return user.save();
}

async function getUserDetailsById(id) {
    return await User.findById(id).populate('bookedHotels').lean();
}

module.exports = {
    login,
    register,
    getUserDetailsById
}