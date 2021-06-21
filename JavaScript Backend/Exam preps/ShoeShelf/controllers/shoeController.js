const { Router } = require('express');

const { isAuth, isCreator } = require('../middlewares/guards');
const offerService = require('../services/offerService');

const router = Router();

router.get('/create', isAuth(), (req, res) => {
    res.render('shoe/create', { title: 'Create' });
});

router.post('/create', isAuth(), async (req, res) => {
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

router.get('/:id/details', isAuth(), async (req, res) => {
    const shoe = await offerService.getById(req.params.id);
    shoe.isCreator = shoe.creator == req.user._id;
    shoe.isBought = shoe.buyers.some(x => x._id == req.user._id);
    res.render('shoe/details', { title: 'Details', shoe });
});

router.get('/:id/edit', isAuth(), isCreator(), async (req, res) => {
    const shoe = await offerService.getById(req.params.id);
    res.render('shoe/edit', { title: 'Edit', shoe });
});

router.post('/:id/edit', isAuth(), isCreator(), async (req, res) => {
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

router.get('/:id/delete', isAuth(), isCreator(), async (req, res) => {
    await offerService.deleteOffer(req.params.id);
    res.redirect('/');
});

router.get('/:id/buy', isAuth(), async (req, res) => {
    await offerService.buy(req.user._id, req.params.id);
    res.redirect(`/shoe/${req.params.id}/details`);
});

module.exports = router;