const Offer = require('../models/Offer');
const User = require('../models/User');

const create = (data) => {
    const offer = new Offer(data);
    return offer.save();
};

const getAll = () => {
    return Offer.find({}).sort({ buyers: 'desc' }).lean();
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

const buy = async (userId, offerId) => {
    const user = await User.findById(userId);
    const offer = await Offer.findById(offerId);
    user.bought.push(offerId);
    offer.buyers.push(userId);
    return Promise.all([user.save(), offer.save()]);
};

module.exports = {
    create,
    getAll,
    getById,
    edit,
    deleteOffer,
    buy
}