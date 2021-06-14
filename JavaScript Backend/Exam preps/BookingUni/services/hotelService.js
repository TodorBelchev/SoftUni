const Hotel = require('../models/Hotel');

async function getAll() {
    return await Hotel.find({}).lean();
}

async function create({ hotel, city, freeRooms, imgURL, creator }) {
    const newHotel = new Hotel({ name: hotel, city, imgURL, freeRooms: Number(freeRooms), creator });
    return newHotel.save();
}

module.exports = {
    getAll,
    create
}