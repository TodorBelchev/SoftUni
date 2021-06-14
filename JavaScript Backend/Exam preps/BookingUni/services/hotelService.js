const Hotel = require('../models/Hotel');

async function getAll() {
    return await Hotel.find({}).lean();
}

async function create({ hotel, city, freeRooms, imgURL, owner }) {
    const newHotel = new Hotel({ name: hotel, city, imgURL, freeRooms: Number(freeRooms), owner });
    return newHotel.save();
}

async function getOneById(id) {
    return await Hotel.findById(id).lean();
}

async function book(id, userId) {
    const hotel = await Hotel.findById(id);
    if (!hotel.usersBooked.includes(userId)) {
        hotel.usersBooked.push(userId);
    }
    return hotel.save();
}

module.exports = {
    getAll,
    create,
    getOneById,
    book
}