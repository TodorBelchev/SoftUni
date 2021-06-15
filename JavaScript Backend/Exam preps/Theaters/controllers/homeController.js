const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    let template = 'guestHome';
    req.user ? template = 'userHome' : '';
    res.render(template, { title: 'Home' });
});

module.exports = router;