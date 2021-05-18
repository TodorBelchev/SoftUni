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
        fs.readFile('./data/cats.json', (err, data) => {
            if (err) {
                console.log(err);
                throw err;
            }

            const cats = JSON.parse(data);
            fs.readFile(filePath, (err, data) => handleHtmlFileRead(err, data, res, { cats }));
        });
    } else {
        return true;
    }
}