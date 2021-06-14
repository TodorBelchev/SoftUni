const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

module.exports = (app) => {
    app.engine('hbs', handlebars({ extname: '.hbs' }));
    app.set('view engine', 'hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(express.static('./static'));

    app.use(routes);
};