const Trip = require('../models/Trip');
const User = require('../models/User');

const create = (data) => {
    const trip = new Trip(data);
    return trip.save();
};

const getAll = () => {
    return Trip.find({}).lean();
};

const getById = (id) => {
    return Trip.findById(id).populate('creator').populate('buddies').lean();
};

const joinTrip = async (tripId, userId) => {
    const trip = await Trip.findById(tripId);
    const user = await User.findOne({ _id: userId });
    user.trips.push(tripId);
    trip.buddies.push(userId);
    trip.seats = trip.seats - 1;
    return Promise.all([user.save(), trip.save()]);
};

const editTrip = async (tripId, data) => {
    const trip = await Trip.findById(tripId);
    Object.assign(trip, data);
    return trip.save();
};

const deleteTrip = async (tripId) => {
    return Trip.deleteOne({ _id: tripId });
};

const getTripsByCreator = (creatorId) => {
    return Trip.find({ creator: creatorId }).lean();
};

module.exports = {
    create,
    getAll,
    getById,
    joinTrip,
    editTrip,
    deleteTrip,
    getTripsByCreator
}