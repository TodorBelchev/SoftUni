const { Router } = require('express');

const playService = require('../services/playService');
const router = Router();

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            isPublic: req.body.isPublic ? true : false,
            creator: req.user._id
        }
        const play = await playService.create(data);
        res.redirect(`/play/${play._id}/details`);
    } catch (error) {
        res.render('create', { title: 'Create', oldData: data });
    }
});

router.get('/:id/details', async (req, res) => {
    const play = await playService.getById(req.params.id);
    const ctx = {
        title: 'Details',
        play,
        isCreator: req.user && play.creator == req.user._id,
        isLiked: req.user && play.usersLiked.some(x => x._id == req.user._id)
    };
    res.render('details', ctx);
});

router.get('/:id/like', async (req, res) => {
    const id = req.params.id;
    await playService.like(id, req.user._id);

    res.redirect(`/play/${id}/details`);
});

router.get('/:id/edit', async (req, res) => {
    const play = await playService.getById(req.params.id);
    res.render('edit', { title: 'Edit', play });
});

router.post('/:id/edit', async (req, res) => {
    const id = req.params.id;
    const data = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        isPublic: req.body.isPublic ? true : false,
        creator: req.user._id
    };

    await playService.edit(id, data);
    
    res.redirect(`/play/${id}/details`);
});

router.get('/:id/delete', async (req, res) => {
    await playService.deletePlay(req.params.id);

    res.redirect('/');
});

module.exports = router;