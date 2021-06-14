const { Router } = require('express');

const hotelService = require('../services/hotelService');
const { cookie_name } = require('../config');

const router = Router();

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', async (req, res) => {
    const data = Object.assign({}, req.body, { owner: req[cookie_name]._id });
    await hotelService.create(data);
    res.status(201).redirect('/');
});

router.get('/:id/details', async (req, res) => {
    const hotel = await hotelService.getOneById(req.params.id);
    const ctx = {
        title: 'Details',
        hotel,
        isCreator: req.user && hotel.owner == req.user._id,
        isBooked: req.user && hotel.usersBooked.includes(req.user._id)
    };

    console.log(hotel);

    res.render('details', ctx);
});

module.exports = router;