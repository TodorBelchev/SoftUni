const { Router } = require('express');

const cubeServices = require('../services/cubeServices');
const accessoryServices = require('../services/accessoryServices');
const { isCreator } = require('../middlewares/guards');
const { cookie_name } = require('../config/config').development;

const router = Router();

router.get('/create', (req, res) => {
    res.status(200).render('create', { title: 'Create cube' });
});

router.post('/create', async (req, res) => {
    try {
        const data = Object.assign({}, req.body, { creator: req[cookie_name]._id });
        await cubeServices.create(data);
        res.status(201).redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).end()
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const cube = await cubeServices.getOneWithAccessories(req.params.id);
        cube.isCreator = req.user && cube.creator == req.user._id;
        res.status(200).render('details', { cube, title: 'Cubicle' });
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
});

router.get('/attach/:id', isCreator(), async (req, res) => {
    try {
        const cube = await cubeServices.getOneById(req.params.id);
        const accessories = await accessoryServices.getNotAttached(cube.accessories);
        res.status(200).render('attachAccessory', { cube, accessories });
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
});

router.post('/attach/:id', isCreator(), async (req, res) => {
    try {
        await cubeServices.attachAccessory(req.params.id, req.body.accessory);
        res.status(200).redirect('/cube/details/' + req.params.id);
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
});

module.exports = router;