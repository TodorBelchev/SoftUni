const Hotel = require('../models/Hotel');

async function getAll() {
    return await Hotel.find({}).lean();
}

module.exports = {
    getAll
}