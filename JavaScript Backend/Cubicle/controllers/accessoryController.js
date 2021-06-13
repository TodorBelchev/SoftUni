const { Router } = require('express');

const accessoryServices = require('../services/accessoryServices');

const router = Router();

router.get('/create', (req, res) => {
    res.status(200).render('createAccessory', { title: 'Create accessory' });
});

router.post('/create', async (req, res) => {
    try {
        await accessoryServices.create(req.body);
        res.status(201).redirect('/');
    } catch (error) {
        console.log(error);
        const errorMSG = Object.values(error.errors).map(x => x.properties.message)[0];
        res.render('createAccessory', { title: 'Create accessory', error: errorMSG, oldData: req.body });
    }
});

module.exports = router;