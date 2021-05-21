// TODO: Require Controllers...
const home = require('../controllers/home');
const about = require('../controllers/about');
const create = require('../controllers/create');
const Cube = require('../models/Cube');

module.exports = (app) => {
    // TODO...

    app.all('/', home);

    app.all('/about', about);

    app.all('/create', create);

};