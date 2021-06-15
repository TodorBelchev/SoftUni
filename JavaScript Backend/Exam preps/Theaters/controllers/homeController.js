const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    res.render('home', { title: 'Home' });
});

module.exports = router;