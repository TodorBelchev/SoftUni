const express = require('express');

const config = require('./config');
const mongooseSetup = require('./config/mongoose');

const app = express();
mongooseSetup();

app.get('/', (req, res) => {
    res.send('Hello express!')
});

app.listen(config.port, () => console.log('Server is listening on port 3000!'));