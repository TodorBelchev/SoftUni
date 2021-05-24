const { Router } = require('express');
const fs = require('fs');

const router = Router();

router.get('/', (req, res) => {
    fs.readFile('./config/database.json', (err, data) => {
        if (err) throw err;
        const cubes = JSON.parse(data);
        res.status(200).render('home', { cubes });
    });
});

router.get('/about', (req, res) => {
    res.status(200).render('about');
});

module.exports = router;