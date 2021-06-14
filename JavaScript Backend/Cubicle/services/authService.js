const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { secret } = require('../config').development;

const login = async (username, password) => {
    const user = await User.findOne({ username }).lean();

    if (user == null) throw new Error('User not found!');

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new Error('Invalid password!');

    const token = jwt.sign({ username, _id: user._id }, secret);
    return token;
};

const register = async (username, password) => {
    const user = new User({ username, password });

    return await user.save();
};

module.exports = {
    login,
    register
}