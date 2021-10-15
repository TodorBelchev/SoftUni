const express = require('express');
const cors = require('cors');
const path = require('path');

const config = require('./index');
const routes = require('./routes');

module.exports = (app) => {
    app.use(express.static(path.join(__dirname, '..', 'public', 'dist')));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors(config.CORS));

    app.use('/api', routes);
}