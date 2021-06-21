const Course = require('../models/Course');

const getTopThreeEnrolled = () => {
    return Course.find({}).sort({ enrolledUsers: 'desc' }).limit(3).lean();
};

const getAll = () => {
    return Course.find({}).sort({ createdAt: 'asc' }).lean();
}

module.exports = {
    getTopThreeEnrolled,
    getAll
}