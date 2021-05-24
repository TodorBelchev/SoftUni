const { Router } = require('express');

const Cube = require('../models/Cube');

const router = Router();

router.get('/create', (req, res) => {
    res.status(200).render('create');
});

router.post('/create', (req, res) => {
    const { name, description, imageURL, difficultyLevel } = req.body;
    const cube = new Cube({ name, description, imageURL, difficultyLevel });
    cube.save();
    res.status(201).redirect('/');
});

router.get('/details/:id', async (req, res) => {
    const cube = await Cube.findById(req.params.id).lean();
    res.status(200).render('details', cube);
});

module.exports = router;