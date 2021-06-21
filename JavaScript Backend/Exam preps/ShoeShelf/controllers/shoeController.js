const { Router } = require('express');

const offerService = require('../services/offerService');

const router = Router();

router.get('/create', (req, res) => {
    res.render('shoe/create', { title: 'Create' });
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

router.get('/:id/details', async (req, res) => {
    const shoe = await offerService.getById(req.params.id);
    shoe.isCreator = shoe.creator == req.user._id;
    shoe.isBought = shoe.buyers.some(x => x.id == req.user._id);
    res.render('shoe/details', { title: 'Details', shoe });
});

router.get('/:id/edit', async (req, res) => {
    const shoe = await offerService.getById(req.params.id);
    res.render('shoe/edit', { title: 'Edit', shoe });
});

router.post('/:id/edit', async (req, res) => {
    const data = {
        name: req.body.name,
        price: Number(req.body.price),
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        brand: req.body.brand,
        creator: req.user._id
    };

    await offerService.edit(req.params.id, data);
    res.redirect(`/shoe/${req.params.id}/details`);
});

router.get('/:id/delete', async (req, res) => {
    await offerService.deleteOffer(req.params.id);
    res.redirect('/');
});

module.exports = router;