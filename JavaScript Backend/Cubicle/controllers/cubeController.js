const { Router } = require('express');

const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

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
    const cube = await Cube.findById(req.params.id)
        .populate('accessories')
        .lean();
    res.status(200).render('details', cube);
});

router.get('/attach/:id', async (req, res) => {
    const cube = await Cube.findById(req.params.id).lean();
    const accessories = await Accessory.find({ _id: {$nin: cube.accessories} }).lean();
    res.status(200).render('attachAccessory', { cube, accessories });
});

router.post('/attach/:id', async (req, res) => {
    const cube = await Cube.findById(req.params.id);
    const accessory = await Accessory.findById(req.body.accessory);
    cube.accessories.push(accessory);
    cube.save();
    res.status(200).redirect('/cube/details/' + req.params.id);
});

module.exports = router;