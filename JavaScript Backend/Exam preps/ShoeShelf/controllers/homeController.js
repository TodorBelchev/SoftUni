const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    if(req.user) {
        res.render('home/user', { title: 'Home' });
    } else {
        res.render('home/guest', { title: 'Home' });
    }
});

module.exports = router;