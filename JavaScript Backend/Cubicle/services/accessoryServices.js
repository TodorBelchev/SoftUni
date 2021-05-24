const Accessory = require('../models/Accessory');

function create(data) {
    const { name, description, imageURL } = data;
    const accessory = new Accessory({ name, description, imageURL });
    return accessory.save();
}

async function getNotAttached(attached) {
    return Accessory.find({ _id: { $nin: attached } }).lean();
}

module.exports = {
    create,
    getNotAttached
}