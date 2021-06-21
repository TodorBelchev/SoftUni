const mongoose = require('mongoose');
const config = require('./index');

module.exports = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(config.db_connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection;

        db.on('error', (err) => {
            console.error('connection error: ' + err.message);
            reject(err);
        });
        db.once('open', () => {
            console.log('Db Connected!');
            resolve();
        });
    });
}