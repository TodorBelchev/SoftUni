module.exports = {
    development: {
        port: process.env.PORT || 3000,
        db_connection: 'mongodb://localhost/cubicle'
    },
    production: {}
};