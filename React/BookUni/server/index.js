const express = require('express');

const config = require('./config');
const expressSetup = require('./config/express');
const mongooseSetup = require('./config/mongoose');

const start = async () => {
    const app = express();
    expressSetup(app);
    await mongooseSetup();

    app.listen(config.PORT, () => console.log(`Server is listening on port: ${config.PORT}`));
};

start();