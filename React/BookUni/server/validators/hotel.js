const validateHotel = (hotelData) => {
    if (hotelData.name.length < 4) {
        throw new Error('Name must be at least 4 characters long!');
    }

    if (hotelData.city.length < 3) {
        throw new Error('City must be at least 3 characters long!');
    }

    if (!hotelData.imgUrl.match(/https?/)) {
        throw new Error('Invalid image URL!');
    }

    if (hotelData.freeRooms < 1 || hotelData.freeRooms > 100) {
        throw new Error('Free rooms must be between 1 and 100!');
    }
};

module.exports = {
    validateHotel
}