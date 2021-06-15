const Play = require("../models/Play");

const create =  (data) => {
    const play = new Play(data);
    return play.save();
};

const getById = async (id) => {
    return await Play.findById(id).lean();
}

const getAll = async () => {
    return await Play.find({}).sort({ createdAt: 'desc'}).limit(3).lean();
}

module.exports = {
    create,
    getById,
    getAll
}