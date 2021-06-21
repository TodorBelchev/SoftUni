const Course = require('../models/Course');

const getTopThreeEnrolled = () => {
    return Course.find({}).sort({ enrolledUsers: 'desc' }).limit(3).lean();
};

const getAll = () => {
    return Course.find({}).sort({ createdAt: 'asc' }).lean();
}

const create = (data) => {
    const course = new Course(data);
    return course.save();
}

const getOne = (id) => {
    return Course.findOne({ _id: id }).lean();
}

const enroll = async (courseId, userId) => {
    const course = await Course.findById(courseId);
    course.enrolledUsers.push(userId);
    return course.save();
};

module.exports = {
    getTopThreeEnrolled,
    getAll,
    create,
    getOne,
    enroll
}