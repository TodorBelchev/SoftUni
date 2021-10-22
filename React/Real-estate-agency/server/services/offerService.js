const Offer = require('../models/Offer');

const createOffer = (homeName, propertyType, year, city, homeImage, description, availablePieces, owner) => {
    const offer = new Offer({ homeName, propertyType, year, city, homeImage, description, availablePieces, owner });
    return offer.save();
};

const getAll = () => {
    return Offer.find({});
};

const getById = (id) => {
    return Offer.findById(id).populate('rentedUsers', '-password');
}

const deleteById = (id) => {
    return Offer.findByIdAndDelete(id);
}

const rent = async (id, tenantId) => {
    try {
        const offer = await Offer.findById(id);
        offer.rentedUsers.push(tenantId);
        offer.availablePieces--;
        await offer.save();
        return offer.populate('rentedUsers', '-password');
    } catch (error) {
        return error;
    }
}

module.exports = {
    createOffer,
    getAll,
    getById,
    rent,
    deleteById
}