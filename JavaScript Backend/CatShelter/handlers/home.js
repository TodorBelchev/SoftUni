const fs = require('fs');
const path = require('path');
const cats = require('../data/cats');
const { handleHtmlFileRead } = require('../utils');

module.exports = (req, res) => {
    const baseURL = 'http://' + req.headers.host + '/';
    const urlPath = new URL(req.url, baseURL);
    const pathname = urlPath.pathname;

    if(pathname === '/' && req.method === 'GET') {
        const filePath = path.normalize(path.join(__dirname, '../views/index.html'));
        fs.readFile(filePath, (err, data) => handleHtmlFileRead(err, data, res));
    } else {
        return true;
    }
}