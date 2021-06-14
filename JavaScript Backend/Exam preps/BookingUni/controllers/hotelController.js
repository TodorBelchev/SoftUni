const { Router } = require('express');

const hotelService = require('../services/hotelService');
const { cookie_name } = require('../config');

const router = Router();

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', async (req, res) => {
    const data = Object.assign({}, req.body, { creator: req[cookie_name]._id });
    await hotelService.create(data);
    res.status(201).redirect('/');
});

module.exports = router;