const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    res.render('guestHome', { title: 'Home' });
});

module.exports = router;