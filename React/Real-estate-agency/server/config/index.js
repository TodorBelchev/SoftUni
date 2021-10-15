const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        PORT: process.env.PORT || 3030,
        DB_CONNECTION: 'mongodb://127.0.0.1:27017/real-estate-agency',
        SECRET: 'very strong secret',
        SALT_ROUNDS: 10,
        CORS: {
            origin: ['http://localhost:3000']
        }
    },
    production: {}
}

module.exports = config[env];