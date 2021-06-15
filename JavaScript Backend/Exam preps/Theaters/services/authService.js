const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { secret, salt_rounds } = require('../config');

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

async function register(username, password) {
    const hashedPass = await bcrypt.hash(password, salt_rounds);
    const user = new User({ username, password: hashedPass });

    return user.save();
}


module.exports = {
    login,
    register
}