const Offer = require('../models/Offer');

const create = (data) => {
    const offer = new Offer(data);
    return offer.save();
};

const getAll = () => {
    return Offer.find({}).lean();
};

const getById = (id) => {
    return Offer.findById(id).lean();
};

module.exports = {
    create,
    getAll,
    getById
}