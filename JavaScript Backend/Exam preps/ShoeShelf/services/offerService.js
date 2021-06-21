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

const edit = async (id, data) => {
    const offer = await Offer.findById(id);
    Object.assign(offer, data);
    return offer.save();
};

const deleteOffer = (id) => {
    return Offer.deleteOne({ _id: id });
};

module.exports = {
    create,
    getAll,
    getById,
    edit,
    deleteOffer
}