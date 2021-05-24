const { Router } = require('express');

const accessoryServices = require('../services/accessoryServices');

const router = Router();

router.get('/create', (req, res) => {
    res.status(200).render('createAccessory');
});

router.post('/create', async (req, res) => {
    try {
        await accessoryServices.create(req.body);
        res.status(201).redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
});

module.exports = router;