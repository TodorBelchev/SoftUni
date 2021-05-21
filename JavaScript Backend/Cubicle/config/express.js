const express = require('express');
const hbs = require('express-handlebars');

module.exports = (app) => {

    //TODO: Setup the view engine
    app.engine('hbs', hbs({ extname: '.hbs' }));
    app.set('view engine', 'hbs');

    //TODO: Setup the body parser
    app.use(express.urlencoded({ extended: true }));
    //TODO: Setup the static files
    app.use(express.static('./static'))

};