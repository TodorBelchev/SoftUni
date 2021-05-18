const path = require('path');
const fs = require('fs');

function getContentType(extName) {
    const contentTypes = {
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.jpeg': 'image/jpeg'
    }
    return contentTypes[extName];
}

module.exports = (req, res) => {
    const baseURL = 'http://' + req.headers.host + '/';
    const urlPath = new URL(req.url, baseURL);
    const pathName = urlPath.pathname;
    const extName = path.extname(pathName)

    if (pathName.startsWith('/content') && req.method === 'GET') {
        fs.readFile(`.${pathName}`, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, '404 not found');
                res.end();
                return;
            }

            res.writeHead(200, { 'Content-Type': getContentType(extName) });
            res.write(data);
            res.end();
        });
    }

    return true;
}