const path = require('path');
const fs = require('fs');
const qs = require('querystring');
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
    } else if (pathName === '/cats/add-breed' && req.method === 'POST') {
        let formData = '';
        req.on('data', data => formData += data);
        req.on('end', () => {
            const body = qs.parse(formData);

            fs.readFile('./data/breeds.json', (err, data) => {
                if (err) {
                    throw err;
                }

                const breeds = JSON.parse(data);
                breeds.push(body.breed);

                fs.writeFile('./data/breeds.json', JSON.stringify(breeds), (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log('File saved');
                });

                res.writeHead(302, { location: '/' });
                res.end();
            });
        });
    } else {
        return true;
    }

}