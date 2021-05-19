const path = require('path');
const fs = require('fs');
const qs = require('querystring');
const formidable = require('formidable');
const uuid = require('uuid');
const { handleHtmlFileRead, readFromFile } = require('../utils');

module.exports = (req, res) => {
    const baseUrl = 'http://' + req.headers.host + '/cats';
    const url = new URL(req.url, baseUrl);
    const pathName = url.pathname;
    let filePath;

    if (pathName === '/cats/add-cat' && req.method === 'GET') {
        filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));
        fs.readFile('./data/breeds.json', (err, data) => {
            if (err) {
                console.log(err);
                throw err;
            }

            const breeds = JSON.parse(data);
            fs.readFile(filePath, (err, data) => handleHtmlFileRead(err, data, res, { breeds }));
        });
    } else if (pathName === '/cats/add-cat' && req.method === 'POST') {
        const form = formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) throw err;

            const oldPath = files.upload.path;
            const newPath = path.normalize(path.join(__dirname.replace('\\handlers', ''), 'content/images/' + files.upload.name));

            fs.rename(oldPath, newPath, (err) => {
                if (err) throw err;
                console.log('File uploaded');
            })

            fs.readFile('./data/cats.json', (err, data) => {
                const catsData = JSON.parse(data);
                catsData.push({ id: uuid.v4(), ...fields, image: files.upload.name });

                fs.writeFile('./data/cats.json', JSON.stringify(catsData), (err) => {
                    if (err) throw err;
                    console.log('File saved');
                });

                res.writeHead(302, { location: '/' });
                res.end();
            });
        });
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
                    if (err) throw err;
                    console.log('File saved');
                });

                res.writeHead(302, { location: '/' });
                res.end();
            });
        });
    } else if (pathName.includes('/cats-edit') && req.method === 'GET') {
        const catId = pathName.split('/').pop();

        const promises = [
            readFromFile('./data/cats.json'),
            readFromFile('./data/breeds.json')
        ];

        Promise.all(promises)
            .then(result => {
                const cat = result[0].find(x => x.id === catId);
                cat.breeds = result[1];
                filePath = path.normalize(path.join(__dirname, '../views/editCat.html'));
                fs.readFile(filePath, (err, data) => handleHtmlFileRead(err, data, res, { cat }));
            })
            .catch(err => console.log(err));
    } else if (pathName.includes('/cats-edit') && req.method === 'POST') {
        const form = formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) throw err;

            const oldPath = files.upload.path;
            const newPath = path.normalize(path.join(__dirname.replace('\\handlers', ''), 'content/images/' + files.upload.name));

            if (files.upload.name) {
                fs.rename(oldPath, newPath, (err) => {
                    if (err) throw err;
                    console.log('File uploaded');
                });
            }

            fs.readFile('./data/cats.json', (err, data) => {
                if (err) throw err;

                const catsData = JSON.parse(data);
                const catId = req.url.split('/').pop();
                const cat = catsData.find(x => x.id === catId);
                const index = catsData.indexOf(cat);
                catsData[index] = { id: catId, ...fields, image: files.upload.name || catsData[index].image };

                fs.writeFile('./data/cats.json', JSON.stringify(catsData), (err) => {
                    if (err) throw err;
                    console.log('File saved');
                });

                res.writeHead(302, { location: '/' });
                res.end();
            });
        });
    } else if (pathName.startsWith('/cats-find-new-home')) {
        fs.readFile('./data/cats.json', (err, data) => {
            if (err) throw err;

            const catsData = JSON.parse(data);
            const catId = req.url.split('/').pop();
            const cat = catsData.find(x => x.id === catId);
            const index = catsData.indexOf(cat);
            catsData.splice(index, 1);


            const imagePath = path.join(__dirname.replace('handlers', ''), './content/images/') + cat.image;

            fs.rm(imagePath, (err) => {
                if (err) throw err;
                console.log('Image deleted');
            });

            fs.writeFile('./data/cats.json', JSON.stringify(catsData), (err) => {
                if (err) throw err;
                console.log('File saved');
            });

            res.writeHead(302, { location: '/' });
            res.end();
        })
    } else {
        return true;
    }

}