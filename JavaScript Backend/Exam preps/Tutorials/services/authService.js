const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { secret, salt_rounds } = require('../config');

const login = async (username, password) => {
    const user = await User.findOne({ username: { $regex: new RegExp(`^${username}$`) } }).lean();

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

const register = async (username, password) => {
    let user = await User.findOne({ username: { $regex: new RegExp(`^${username}$`, 'i') } }).lean();

    console.log(user);
    if (user != null) {
        throw new Error('Username already exists!');
    }

    const hashedPass = await bcrypt.hash(password, salt_rounds);
    user = new User({ username, password: hashedPass });

    return user.save();
}


module.exports = {
    login,
    register
}