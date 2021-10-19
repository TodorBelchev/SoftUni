const User = require('../models/User');

const getByUsername = (username) => {
    return User.findOne({ username });
};

const createUser = (username, name, password) => {
    const user = new User({ username, name, password });
    return user.save();
}

module.exports = {
    getByUsername,
    createUser
}