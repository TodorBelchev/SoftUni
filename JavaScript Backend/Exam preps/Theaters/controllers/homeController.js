const { Router } = require('express');

const playService = require('../services/playService');

const router = Router();

router.get('/', async (req, res) => {
    let plays;
    let template = '';
    if (req.user) {
        template = 'userHome';
        plays = await playService.getAll();
    } else {
        template = 'guestHome';
        plays = await playService.getAll();
    }
    plays = plays.map(x => Object.assign(x, { likes: x.usersLiked.length}));
    res.render(template, { title: 'Home', plays });
});

module.exports = router;