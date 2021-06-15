const { Router } = require('express');

const playService = require('../services/playService');

const router = Router();

router.get('/', async (req, res) => {
    let plays;
    let template = '';
    if (req.user) {
        template = 'userHome';
        plays = await playService.getLatestThree();
    } else {
        template = 'guestHome';
        plays = await playService.getLatestThree();
    }
    plays = plays.map(x => Object.assign(x, { likes: x.usersLiked.length}));
    res.render(template, { title: 'Home', plays });
});

module.exports = router;