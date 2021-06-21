const express = require('express');

const config = require('./config');
const expressSetup = require('./config/express');
const mongooseSetup = require('./config/mongoose');

const start = async () => {
    const app = express();
    expressSetup(app);
    await mongooseSetup();

    app.listen(config.port, () => console.log('Server is listening on port 3000!'));
};

start();