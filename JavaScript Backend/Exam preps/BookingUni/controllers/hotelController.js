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
    if (!req.user) return res.redirect('/auth/login');
    const hotel = await hotelService.getOneById(req.params.id);
    const ctx = {
        title: 'Details',
        hotel,
        isCreator: req.user && hotel.owner == req.user._id,
        isBooked: req.user && hotel.usersBooked.some(x => x._id == req.user._id)
    };

    res.render('details', ctx);
});

router.get('/:id/book', async (req, res) => {
    await hotelService.book(req.params.id, req.user._id);
    res.redirect(`/hotel/${req.params.id}/details`);
});

router.get('/:id/edit', async (req, res) => {
    const hotel = await hotelService.getOneById(req.params.id);
    res.render('edit', { title: 'Edit', hotel });
});

router.post('/:id/edit', async (req, res) => {
    const newData = {
        name: req.body.hotel.trim(),
        city: req.body.city.trim(),
        freeRooms: Number(req.body.freeRooms),
        imgURL: req.body.imgURL.trim()
    }
    await hotelService.edit(newData, req.params.id);
    res.redirect(`/hotel/${req.params.id}/details`);
});

router.get('/:id/delete', async (req, res) => {
    await hotelService.deleteHotel(req.params.id);
    res.redirect('/');
});

module.exports = router;