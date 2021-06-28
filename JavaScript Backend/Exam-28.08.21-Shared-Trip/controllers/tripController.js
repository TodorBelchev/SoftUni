const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { isAuth, isCreator } = require('../middlewares/guards');
const tripService = require('../services/tripService');

const router = Router();

router.get('/create', isAuth(), async (req, res) => {
    res.render('trip/create', { title: 'Create' });
});

router.post('/create',
    isAuth(),
    body('startPoint').trim().isLength({ min: 4 }).withMessage('Start point must be at least 4 characters long!'),
    body('endPoint').trim().isLength({ min: 4 }).withMessage('End point must be at least 4 characters long!'),
    body('seats').isInt({ min: 0, max: 4 }).withMessage('Seats must be between 0 and 4!'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters long!'),
    body('carImage').trim().matches(new RegExp('^https?')).withMessage('Car image URL is invalid!'),
    body('price').isInt({ min: 1, max: 50 }).withMessage('Price must be between 1 and 50!'),
    async (req, res) => {
        const data = {
            startPoint: req.body.startPoint.trim(),
            endPoint: req.body.endPoint.trim(),
            date: req.body.date.trim(),
            time: req.body.time.trim(),
            carImage: req.body.carImage.trim(),
            carBrand: req.body.carBrand.trim(),
            seats: Number(req.body.seats),
            price: Number(req.body.price),
            description: req.body.description.trim(),
            creator: req.user._id
        };
        try {
            const errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }

            await tripService.create(data);
            res.redirect('/');
        } catch (error) {
            data._id = req.params.id;
            res.render('trip/create', { title: 'Create', errors: error.message.split('\n'), trip: data });
        }
    });

router.get('/:id/details', async (req, res) => {
    try {
        const trip = await tripService.getById(req.params.id);
        if (trip.buddies.length > 0) {
            trip.buddiesString = trip.buddies.map(x => x.email).join(', ');
        }
        if (req.user) {
            trip.isCreator = req.user._id == trip.creator._id;
            trip.isJoined = trip.buddies.some(x => x._id == req.user._id);
        }
        trip.hasSeats = trip.seats > 0;
        res.render('trip/details', { title: 'Details', trip });
    } catch (error) {
        console.log(error);
        res.render('notFound', { title: 'Error' });
    }

});

router.get('/:id/join', isAuth(), async (req, res) => {
    try {
        const trip = await tripService.joinTrip(req.params.id, req.user._id);
        res.redirect(`/trips/${req.params.id}/details`);
    } catch (error) {
        console.log(error);
        res.render('notFound', { title: 'Error' });
    }
});

router.get('/:id/edit', isAuth(), isCreator(), async (req, res) => {
    try {
        const trip = await tripService.getById(req.params.id);
        res.render('trip/edit', { title: 'Edit', trip });
    } catch (error) {
        console.log(error);
        res.render('notFound', { title: 'Error' });
    }
});

router.post('/:id/edit',
    isAuth(),
    isCreator(),
    body('startPoint').trim().isLength({ min: 4 }).withMessage('Start point must be at least 4 characters long!'),
    body('endPoint').trim().isLength({ min: 4 }).withMessage('End point must be at least 4 characters long!'),
    body('seats').isInt({ min: 0, max: 4 }).withMessage('Seats must be between 0 and 4!'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters long!'),
    body('carImage').trim().matches(new RegExp('^https?')).withMessage('Car image URL is invalid!'),
    body('price').isInt({ min: 1, max: 50 }).withMessage('Price must be between 1 and 50!'), async (req, res) => {
        const data = {
            startPoint: req.body.startPoint.trim(),
            endPoint: req.body.endPoint.trim(),
            date: req.body.date.trim(),
            time: req.body.time.trim(),
            carImage: req.body.carImage.trim(),
            carBrand: req.body.carBrand.trim(),
            seats: Number(req.body.seats),
            price: Number(req.body.price),
            description: req.body.description.trim(),
            creator: req.user._id
        };
        try {
            const errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }

            await tripService.editTrip(req.params.id, data);
            res.redirect(`/trips/${req.params.id}/details`);
        } catch (error) {
            console.log(error);
            data._id = req.params.id;
            res.render('trip/edit', { title: 'Edit', errors: error.message.split('\n'), trip: data });
        }
    });

router.get('/:id/delete', isAuth(), isCreator(), async (req, res) => {
    try {
        await tripService.deleteTrip(req.params.id);
        res.redirect('/trips');
    } catch (error) {
        console.log(error);
        res.render('notFound', { title: 'Error' });
    }
});

module.exports = router;