const { Router } = require('express');

const cubeServices = require('../services/cubeServices');

const router = Router();

router.get('/', async (req, res) => {
    const cubes = await cubeServices.getAll(req.query);
    res.status(200).render('home', { cubes, query: req.query, title: 'Cubicles' });
});

router.get('/about', (req, res) => {
    res.status(200).render('about');
});

module.exports = router;