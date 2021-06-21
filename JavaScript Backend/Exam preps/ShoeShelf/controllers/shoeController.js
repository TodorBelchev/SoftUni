const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { isAuth, isCreator } = require('../middlewares/guards');
const offerService = require('../services/offerService');

const router = Router();

router.get('/create', isAuth(), (req, res) => {
    res.render('shoe/create', { title: 'Create' });
});

router.post('/create',
    isAuth(),
    body('name').trim().isLength({ min: 1 }).withMessage('Name is required!'),
    body('price').trim().isLength({ min: 1 }).withMessage('Price is required!'),
    body('imageUrl').trim().isLength({ min: 1 }).withMessage('Image URL is required!'),
    async (req, res) => {
        const data = {
            name: req.body.name,
            price: Number(req.body.price),
            imageUrl: req.body.imageUrl,
            description: req.body.description,
            brand: req.body.brand,
            creator: req.user._id
        };
        try {
            const errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }

            await offerService.create(data);
            res.redirect('/');
        } catch (error) {
            res.render('shoe/create', { title: 'Create', errors: error.message.split('\n'), oldData: data });
        }

    });

router.get('/:id/details', isAuth(), async (req, res) => {
    try {
        const shoe = await offerService.getById(req.params.id);
        shoe.isCreator = shoe.creator == req.user._id;
        shoe.isBought = shoe.buyers.some(x => x._id == req.user._id);
        res.render('shoe/details', { title: 'Details', shoe });
    } catch (error) {
        res.render('error', { title: 'Error', errors: error.message.split('\n') });
    }
});

router.get('/:id/edit', isAuth(), isCreator(), async (req, res) => {
    try {
        const shoe = await offerService.getById(req.params.id);
        res.render('shoe/edit', { title: 'Edit', shoe });
    } catch (error) {
        res.render('error', { title: 'Error', errors: error.message.split('\n') });
    }
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

    try {
        await offerService.edit(req.params.id, data);
        res.redirect(`/shoe/${req.params.id}/details`);
    } catch (error) {
        res.render('error', { title: 'Error', errors: error.message.split('\n') });
    }
});

router.get('/:id/delete', isAuth(), isCreator(), async (req, res) => {
    try {
        await offerService.deleteOffer(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.render('error', { title: 'Error', errors: error.message.split('\n') });
    }
});

router.get('/:id/buy', isAuth(), async (req, res) => {
    try {
        await offerService.buy(req.user._id, req.params.id);
        res.redirect(`/shoe/${req.params.id}/details`);
    } catch (error) {
        res.render('error', { title: 'Error', errors: error.message.split('\n') });
    }
});

module.exports = router;