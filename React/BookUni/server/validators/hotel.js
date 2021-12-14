const validateHotel = (hotelData) => {
    if (hotelData.name.length === 0) {
        throw new Error('Name is required!');
    }

    if (hotelData.city.length === 0) {
        throw new Error('City is required!');
    }

    if (hotelData.imgUrl.length === 0) {
        throw new Error('Image URL is required!');
    }

    if (hotelData.freeRooms < 1 || hotelData.freeRooms > 100) {
        throw new Error('Free rooms must be between 1 and 100!');
    }
};

module.exports = {
    validateHotel
}