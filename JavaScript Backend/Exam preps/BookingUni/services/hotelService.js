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

module.exports = {
    getAll,
    create,
    getOneById
}