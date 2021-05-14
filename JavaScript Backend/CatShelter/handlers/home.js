const fs = require('fs');
const path = require('path');
const cats = require('../data/cats');

module.exports = (req, res) => {
    const baseURL = 'http://' + req.headers.host + '/';
    const urlPath = new URL(req.url, baseURL);
    const pathname = urlPath.pathname;

    if(pathname === '/' && req.method === 'GET') {
        const filePath = path.normalize(path.join(__dirname, '../views/index.html'));
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, '404 not found');
                res.end();
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
}