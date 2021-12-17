const removePass = (user) => {
    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        bookedHotels: user.bookedHotels,
        offeredHotels: user.offeredHotels,
    }
}

module.exports = {
    removePass
};