module.exports = {
    development: {
        port: process.env.PORT || 3000,
        db_connection: 'mongodb://localhost/cubicle',
        cookie_name: 'user',
        secret: 'very strong secret'
    },
    production: {}
};