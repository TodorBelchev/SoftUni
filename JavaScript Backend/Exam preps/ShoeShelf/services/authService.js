const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { secret, salt_rounds } = require('../config');

const login = async (email, password) => {
    const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } }).lean();

    if (user == null) {
        throw new Error('User not found!');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Invalid password!');
    }

    const token = jwt.sign({ email: user.email, _id: user._id }, secret);
    return token;
}

const register = async (email, password) => {
    let user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } }).lean();

    if (user != null) {
        throw new Error('Username already exists!');
    }

    const hashedPass = await bcrypt.hash(password, salt_rounds);
    user = new User({ email, password: hashedPass });

    return user.save();
}


module.exports = {
    login,
    register
}