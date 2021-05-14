const homeHandler = require('./home');
const staticHandler = require('./static-files');
const catHandler = require('./cat');

module.exports = [homeHandler, staticHandler, catHandler];