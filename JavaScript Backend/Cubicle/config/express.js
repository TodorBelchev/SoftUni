const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const auth = require('../middlewares/auth');

module.exports = (app) => {

    app.engine('hbs', hbs({ extname: '.hbs' }));
    app.set('view engine', 'hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(express.static('./static'));
    app.use(auth);

    app.use(routes);

};