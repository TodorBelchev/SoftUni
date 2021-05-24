const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

function create(data) {
    const { name, description, imageURL, difficultyLevel } = data;
    const cube = new Cube({ name, description, imageURL, difficultyLevel });
    return cube.save();
}

async function getAll() {
    return await Cube.find({}).lean();
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