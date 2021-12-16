const Hotel = require('../models/Hotel');

const getHotelById = (id) => {
    return Hotel.findById(id);
};

const getHotelByName = (name) => {
    return Hotel.findOne({ name });
};

const createHotel = (hotelData) => {
    const hotel = new Hotel(hotelData);
    return hotel.save();
}

const editHotel = (_id, hotelData) => {
    return Hotel.findOneAndUpdate({ _id }, hotelData)
};

module.exports = {
    getHotelById,
    getHotelByName,
    createHotel,
    editHotel
}