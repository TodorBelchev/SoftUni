const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const playService = require('../services/playService');
const { isAuth, isCreator } = require('../middlewares/guards');
const router = Router();

router.get('/create', isAuth(), (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create',
    isAuth(),
    body('title').trim().isLength({ min: 1 }).withMessage('Title is required!'),
    body('description').trim().isLength({ min: 1 }).withMessage('Description is required!'),
    body('imageUrl').trim().isLength({ min: 1 }).withMessage('Image URL is required!'),
    async (req, res) => {
        const data = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            isPublic: req.body.isPublic ? true : false,
            creator: req.user._id
        }

        try {
            const errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }

            const play = await playService.create(data);
            res.redirect(`/play/${play._id}/details`);
        } catch (error) {
            res.render('create', { title: 'Create', errors: error.message.split('\n'), oldData: data });
        }
    });

router.get('/:id/details', isAuth(), async (req, res) => {
    const play = await playService.getById(req.params.id);
    const ctx = {
        title: 'Details',
        play,
        isCreator: req.user && play.creator == req.user._id,
        isLiked: req.user && play.usersLiked.some(x => x._id == req.user._id)
    };
    res.render('details', ctx);
});

router.get('/:id/like', isAuth(), async (req, res) => {
    const id = req.params.id;
    await playService.like(id, req.user._id);

    res.redirect(`/play/${id}/details`);
});

router.get('/:id/edit', isAuth(), isCreator(), async (req, res) => {
    const play = await playService.getById(req.params.id);
    res.render('edit', { title: 'Edit', play });
});

router.post('/:id/edit',
    isAuth(),
    isCreator(),
    body('title').trim().isLength({ min: 1 }).withMessage('Title is required!'),
    body('description').trim().isLength({ min: 1 }).withMessage('Description is required!'),
    body('imageUrl').trim().isLength({ min: 1 }).withMessage('Image URL is required!'),
    async (req, res) => {
        const id = req.params.id;
        const data = {
            _id: id,
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            isPublic: req.body.isPublic ? true : false,
            creator: req.user._id
        };

        try {
            const errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }

            await playService.edit(id, data);
            res.redirect(`/play/${id}/details`);
        } catch (error) {
            res.render('edit', { title: 'Edit', errors: error.message.split('\n'), play: data });
        }
    });

router.get('/:id/delete', isAuth(), isCreator(), async (req, res) => {
    await playService.deletePlay(req.params.id);

    res.redirect('/');
});

module.exports = router;