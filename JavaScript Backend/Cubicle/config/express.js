const express = require('express');
const hbs = require('express-handlebars');
const routes = require('./routes');

module.exports = (app) => {

    app.engine('hbs', hbs({ extname: '.hbs' }));
    app.set('view engine', 'hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('./static'));

    app.use(routes);

};