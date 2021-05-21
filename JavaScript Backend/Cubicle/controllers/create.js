const Cube = require('../models/Cube');
const fs = require('fs');

function create(req, res) {

    const handlers = {
        'GET': (req, res) => {
            res.render('create');
        },
        'POST': (req, res) => {
            const { name, description, imageURL, difficultyLevel } = req.body;
            const cube = new Cube(name, description, imageURL, difficultyLevel);
            fs.readFile('./config/database.json', (err, data) => {
                if (err) throw err;
                const cubicles = JSON.parse(data);
                cubicles.push(cube);
                fs.writeFile('./config/database.json', JSON.stringify(cubicles), (err) => {
                    if (err) throw err;
                    console.log('File saved');
                    res.redirect('/');
                });
            });
        }
    }

    return handlers[req.method](req, res);
}

module.exports = create;