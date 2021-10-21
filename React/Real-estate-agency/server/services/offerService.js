const Offer = require('../models/Offer');

const createOffer = (homeName, propertyType, year, city, homeImage, description, availablePieces, owner) => {
    const offer = new Offer({ homeName, propertyType, year, city, homeImage, description, availablePieces, owner });
    return offer.save();
};

const getAll = () => {
    return Offer.find({});
};

module.exports = {
    createOffer,
    getAll
}