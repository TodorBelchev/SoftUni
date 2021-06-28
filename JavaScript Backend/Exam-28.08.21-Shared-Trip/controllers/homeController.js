const { Router } = require('express');


const tripService = require('../services/tripService');

const router = Router();

router.get('/', async (req, res) => {
    res.render('home', { title: 'Home' });
});

router.get('/trips', async (req, res) => {
    const trips = await tripService.getAll();
    res.render('shared', { title: 'Shared trips', trips });
});

module.exports = router;