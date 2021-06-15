const mongoose = require('mongoose');
const config = require('./index');

module.exports = () => {
    mongoose.connect(config.db_connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoIndex: false
    });
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', console.log.bind(console, 'Db Connected!'));
}