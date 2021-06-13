const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

const app = require('express')();

require('./config/express')(app);
require('./config/mongoose')();

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));