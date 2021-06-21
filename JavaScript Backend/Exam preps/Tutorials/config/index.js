const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        db_connection: 'mongodb://localhost/tutorials',
        cookie_name: 'user',
        secret: 'very strong secret',
        salt_rounds: 10
    },
    production: {}
};

module.exports = config[env];