const { Router } = require('express');
const fs = require('fs');

const Cube = require('../models/Cube');

const router = Router();

router.get('/', async (req, res) => {
    const cubes = await Cube.find({}).lean();
    res.status(200).render('home', { cubes });
});

router.get('/about', (req, res) => {
    res.status(200).render('about');
});

module.exports = router;