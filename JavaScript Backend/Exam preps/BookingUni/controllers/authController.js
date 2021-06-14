const { Router } = require('express');

const router = Router();

router.use('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

module.exports = router;