const { Router } = require('express');

const offerService = require('../services/offerService');

const router = Router();

router.get('/', async (req, res) => {
    let shoes = await offerService.getAll();
    if(req.user) {
        res.render('home/user', { title: 'Home', shoes });
    } else {
        res.render('home/guest', { title: 'Home' });
    }
});

module.exports = router;