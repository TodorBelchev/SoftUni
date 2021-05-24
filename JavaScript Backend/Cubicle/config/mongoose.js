const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    mongoose.connect(config.development.db_connection, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', console.log.bind(console, 'Db Connected!'));
};