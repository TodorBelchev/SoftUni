const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const isLogged = require('../middlewares/isLogged');

module.exports = (app) => {
    app.engine('hbs', hbs({ extname: '.hbs' }));
    app.set('view engine', 'hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(express.static('./static'));
    app.use(isLogged());

    app.use(routes);
};