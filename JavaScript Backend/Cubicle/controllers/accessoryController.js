const { Router } = require('express');
const Accessory = require('../models/Accessory');

const router = Router();

router.get('/create', (req, res) => {
    res.status(200).render('createAccessory');
});

router.post('/create', (req, res) => {
    const { name, description, imageURL } = req.body;
    const accessory = new Accessory({ name, description, imageURL });
    accessory.save();
    res.status(201).redirect('/');
});

module.exports = router;