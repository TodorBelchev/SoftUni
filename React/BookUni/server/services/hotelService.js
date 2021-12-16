const Hotel = require('../models/Hotel');

const getHotels = () => {
    return Hotel.find({}).sort({ freeRooms: 'desc' });
};

const getHotelById = (id) => {
    return Hotel.findById(id);
};

const getHotelByName = (name) => {
    return Hotel.findOne({ name });
};

const createHotel = (hotelData) => {
    const hotel = new Hotel(hotelData);
    return hotel.save();
};

const editHotel = (_id, hotelData) => {
    return Hotel.findOneAndUpdate({ _id }, hotelData)
};

const deleteHotel = (id) => {
    return Hotel.findByIdAndDelete(id);
};

module.exports = {
    getHotels,
    getHotelById,
    getHotelByName,
    createHotel,
    editHotel,
    deleteHotel,
}