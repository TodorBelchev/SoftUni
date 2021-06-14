const Hotel = require('../models/Hotel');
const User = require('../models/User');

async function getAll() {
    return await Hotel.find({}).sort({ freeRooms: 'desc' }).lean();
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
    const user = await User.findById(userId);
    if (!hotel.usersBooked.includes(userId) && hotel.freeRooms > 0) {
        hotel.usersBooked.push(userId);
        hotel.freeRooms = hotel.freeRooms - 1;
        user.bookedHotels.push(id);
    }
    return Promise.all([hotel.save(), user.save()]);
}

async function edit(data, id) {
    const hotel = await Hotel.findById(id);
    if (!hotel) {
        throw new Error('Hotel not found!');
    }

    Object.assign(hotel, data);
    return hotel.save();
}

async function deleteHotel(id) {
    await Hotel.deleteOne({ _id: id }, function (err) {
        console.log(err);
    });
}

module.exports = {
    getAll,
    create,
    getOneById,
    book,
    edit,
    deleteHotel
}