const { Router } = require('express');

const cubeServices = require('../services/cubeServices');

const router = Router();

router.get('/', async (req, res) => {
    const cubes = await cubeServices.getAll();
    res.status(200).render('home', { cubes });
});

router.get('/about', (req, res) => {
    res.status(200).render('about');
});

module.exports = router;