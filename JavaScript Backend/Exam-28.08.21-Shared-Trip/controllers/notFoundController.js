const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    res.render('notFound', { title: 'Not found' });
});

module.exports = router;