const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const cats = require('../data/cats');
const { handleHtmlFileRead } = require('../utils');

module.exports = (req, res) => {
    const baseURL = 'http://' + req.headers.host + '/';
    const urlPath = new URL(req.url, baseURL);
    const pathname = urlPath.pathname;
    const filePath = path.normalize(path.join(__dirname, '../views/index.html'));

    if (pathname === '/' && req.method === 'GET') {
        fs.readFile('./data/cats.json', (err, data) => {
            if (err) {
                console.log(err);
                throw err;
            }

            const cats = JSON.parse(data);
            fs.readFile(filePath, (err, data) => handleHtmlFileRead(err, data, res, { cats }));
        });
    } else if (pathname.includes('search') && req.method === 'POST') {
        const form = formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) throw err;
            fs.readFile('./data/cats.json', (err, data) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
    
                const cats = JSON.parse(data).filter(x => x.name.toLowerCase().includes(fields.search.toLowerCase()));
                fs.readFile(filePath, (err, data) => handleHtmlFileRead(err, data, res, { cats }));
            });
        });
    } else {
        return true;
    }
}