const { Router } = require('express');

const offerService = require('../services/offerService');

const router = Router();

router.get('/create', (req, res) => {
    res.render('shoe/create', { title: 'Create'});
});

router.post('/create', async (req, res) => {
    const data = {
        name: req.body.name,
        price: Number(req.body.price),
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        brand: req.body.brand,
        creator: req.user._id
    };

    await offerService.create(data);
    res.redirect('/');
});

module.exports = router;