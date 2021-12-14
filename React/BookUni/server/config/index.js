const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        PORT: process.env.PORT || 3030,
        DB_CONNECTION: 'mongodb://127.0.0.1:27017/book-uni',
        SECRET: 'very strong secret',
        COOKIE_NAME: 'X-Authorization',
        SALT_ROUNDS: 10,
        CORS: {
            origin: ['http://localhost:3000'],
            credentials: true
        }
    },
    production: {}
}

module.exports = config[env];