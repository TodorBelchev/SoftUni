const User = require('../models/User');

const getByUsername = (username) => {
    return User.findOne({ username });
};

const getByEmail = (email) => {
    return User.findOne({ email });
}

const createUser = (username, email, password) => {
    const user = new User({ username, email, password });
    return user.save();
};

module.exports = {
    getByUsername,
    getByEmail,
    createUser
}