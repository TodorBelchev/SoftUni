const removePass = (user) => {
    return {
        _id: user._id,
        username: user.username,
        name: user.name,
    }
}

module.exports = {
    removePass
};