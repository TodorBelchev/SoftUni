const Play = require("../models/Play");

const create = (data) => {
    const play = new Play(data);
    return play.save();
};

const getById = async (id) => {
    return Play.findById(id).lean();
};

const getAllByDateDesc = async () => {
    return Play.find({ isPublic: true }).sort({ createdAt: 'desc' }).lean();

};

const getMostLikedThree = async () => {
    return Play.find({}).sort({ usersLiked: 'desc' }).limit(3).lean();
};

const like = async (id, userId) => {
    const play = await Play.findById(id);
    play.usersLiked.push(userId);
    return play.save();
};

const edit = async (id, data) => {
    const play = await Play.findById(id);
    Object.assign(play, data);
    return play.save();
};

const deletePlay = async (id) => {
    return Play.deleteOne({ _id: id });
};

module.exports = {
    create,
    getById,
    getMostLikedThree,
    getAllByDateDesc,
    like,
    edit,
    deletePlay
}