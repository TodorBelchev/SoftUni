const Play = require("../models/Play");

const create = (data) => {
    const play = new Play(data);
    return play.save();
};

const getById = async (id) => {
    return await Play.findById(id).lean();
};

const getAll = async () => {
    return await Play.find({}).sort({ createdAt: 'desc' }).limit(3).lean();
};

const like = async (id, userId) => {
    const play = await Play.findById(id);
    play.usersLiked.push(userId);
    return play.save();
};

module.exports = {
    create,
    getById,
    getAll,
    like
}