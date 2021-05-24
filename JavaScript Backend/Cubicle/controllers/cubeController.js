const { Router } = require('express');
const fs = require('fs');

const Cube = require('../models/Cube');

const router = Router();

router.get('/create', (req, res) => {
    res.status(200).render('create');
});

router.post('/create', (req, res) => {
    const { name, description, imageURL, difficultyLevel } = req.body;
    const cube = new Cube(name, description, imageURL, difficultyLevel);
    fs.readFile('./config/database.json', (err, data) => {
        if (err) throw err;
        const cubicles = JSON.parse(data);
        cubicles.push(cube);
        fs.writeFile('./config/database.json', JSON.stringify(cubicles), (err) => {
            if (err) throw err;
            console.log('File saved');
            res.status(201).redirect('/');
        });
    });
});

router.get('/details/:id', (req, res) => {
    fs.readFile('./config/database.json', (err, data) => {
        if (err) throw err;

        const cubes = JSON.parse(data);
        const cube = cubes.find(x => x.id === req.params.id);

        if (cube === undefined) res.status(404).redirect('/notFound');

        res.status(200).render('details', cube );
    });
});

module.exports = router;