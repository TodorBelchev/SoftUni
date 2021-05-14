const path = require('path');
const fs = require('fs');
const { handleHtmlFileRead } = require('../utils');

module.exports = (req, res) => {
    const baseUrl = 'http://' + req.headers.host + '/cats';
    const url = new URL(req.url, baseUrl);
    const pathName = url.pathname;
    let filePath;

    if (pathName === '/cats/add-cat' && req.method === 'GET') {
        filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));
        fs.readFile(filePath, (err, data) => handleHtmlFileRead(err, data, res));
    } else if (pathName === '/cats/add-breed' && req.method === 'GET') {
        filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));
        fs.readFile(filePath, (err, data) => handleHtmlFileRead(err, data, res));
    } else {
        return true;
    }

}