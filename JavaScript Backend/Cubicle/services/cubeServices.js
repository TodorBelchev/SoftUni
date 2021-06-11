const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

function create(data) {
    const { name, description, imageURL, difficultyLevel, creator } = data;
    const cube = new Cube({ name, description, imageURL, difficultyLevel, creator });
    return cube.save();
}

async function getAll(query) {
    return await Cube.find({ name: new RegExp(query.search, 'i'), difficultyLevel: { $gte: query.from || 0, $lte: query.to || 6 } }).lean();
}

async function getOneWithAccessories(id) {
    return await Cube.findById(id)
        .populate('accessories')
        .lean();
}

async function getOneById(id) {
    return await Cube.findById(id).lean();
}

async function attachAccessory(cubeId, accessoryId) {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);
    cube.accessories.push(accessory);
    return cube.save();
}

module.exports = {
    create,
    getAll,
    getOneWithAccessories,
    getOneById,
    attachAccessory
}