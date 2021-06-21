const Offer = require('../models/Offer');

const create = (data) => {
    const offer = new Offer(data);
    return offer.save();
};

const getAll = () => {
    return Offer.find({}).lean();
};

module.exports = {
    create,
    getAll
}