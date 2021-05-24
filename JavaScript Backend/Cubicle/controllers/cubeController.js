const { Router } = require('express');

const cubeServices = require('../services/cubeServices');
const accessoryServices = require('../services/accessoryServices');

const router = Router();

router.get('/create', (req, res) => {
    res.status(200).render('create');
});

router.post('/create', async (req, res) => {
    try {
        await cubeServices.create(req.body);
        res.status(201).redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).end()
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const cube = await cubeServices.getOneWithAccessories(req.params.id);
        res.status(200).render('details', cube);
    } catch (error) {
        console.log(error);
        res.status(500).end()
    }
});

router.get('/attach/:id', async (req, res) => {
    try {
        const cube = await cubeServices.getOneById(req.params.id);
        const accessories = await accessoryServices.getNotAttached(cube.accessories);
        res.status(200).render('attachAccessory', { cube, accessories });
    } catch (error) {
        console.log(error);
        res.status(500).end()
    }
});

router.post('/attach/:id', async (req, res) => {
    try {
        await cubeServices.attachAccessory(req.params.id, req.body.accessory);
        res.status(200).redirect('/cube/details/' + req.params.id);
    } catch (error) {
        console.log(error);
        res.status(500).end()
    }
});

module.exports = router;