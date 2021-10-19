const User = require('../models/User');

const getByUsername = (username) => {
    return User.findOne({ username });
};

module.exports = {
    getByUsername
}