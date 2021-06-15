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
            isPublic: req.body.isPublic ? true : false
        }
        const play = await playService.create(data);
        res.redirect(`/play/${play._id}/details`);
    } catch (error) {
        res.render('create', { title: 'Create', oldData: data });
    }
});

router.get('/:id/details', async (req, res) => {
    const play = await playService.getById(req.params.id);
    res.render('details', { title: 'Details', play})
});

module.exports = router;