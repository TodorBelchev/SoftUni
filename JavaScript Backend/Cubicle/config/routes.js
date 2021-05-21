const home = require('../controllers/home');
const about = require('../controllers/about');
const create = require('../controllers/create');
const details = require('../controllers/details');
const notFound = require('../controllers/notFound');

module.exports = (app) => {

    app.all('/', home);

    app.all('/about', about);

    app.all('/create', create);

    app.all('/details/:id', details);

    app.get('*', notFound);

};