const removePass = (user) => {
    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        bookedHotels: user.bookedHotels
    }
}

module.exports = {
    removePass
};