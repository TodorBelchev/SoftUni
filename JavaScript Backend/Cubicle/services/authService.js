const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = async (username, password) => {
    let user = await User.findOne({ username: { $regex: new RegExp(username, 'i') } }).lean();

    if (user == null) throw new Error('User not found!');

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new Error('Invalid password!');

    const token = jwt.sign({ username, _id: user._id }, 'very strong secret');
    return token;
};

const register = async (username, password) => {
    let user = await User.findOne({ username: { $regex: new RegExp(username, 'i') } }).lean();
    if (user) throw new Error('Username already exists!');

    user = new User({ username, password });

    return await user.save();
};

module.exports = {
    login,
    register
}