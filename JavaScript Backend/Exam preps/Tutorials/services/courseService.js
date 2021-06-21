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

const getOneById = (courseId) => {
    return Course.findOne({ _id: courseId }).lean();
}

const enroll = async (courseId, userId) => {
    const course = await Course.findById(courseId);
    course.enrolledUsers.push(userId);
    return course.save();
};

const edit = async (courseId, data) => {
    const course = await Course.findById(courseId);
    Object.assign(course, data);
    return course.save();
};

const deleteCourse = async (courseId) => {
    return Course.deleteOne({ _id: courseId });
};

const getAllByName = async (name) => {
    return Course.find({ title: new RegExp(`${name}`, 'i') }).sort({ createdAt: 'asc' }).lean();
};

module.exports = {
    getTopThreeEnrolled,
    getAll,
    create,
    getOneById,
    enroll,
    edit,
    deleteCourse,
    getAllByName
}