const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const authService = require('../services/authService');
const tripService = require('../services/tripService');
const { cookie_name } = require('../config');
const { isGuest, isAuth } = require('../middlewares/guards');

const router = Router();

router.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Login' });
});

router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register' });
});

router.post('/login',
    isGuest(),
    body('email')
        .trim()
        .isEmail().withMessage('Invalid email!'),
    body('password')
        .trim()
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long!'),
    async (req, res) => {
        const { email, password } = req.body;

        try {
            const errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }

            const token = await authService.login(email, password);
            res.cookie(cookie_name, token);
            res.redirect('/');
        } catch (error) {
            res.render('login', { title: 'Login', errors: error.message.split('\n'), oldData: email });
        }
    });

router.post('/register',
    isGuest(),
    body('email')
        .trim()
        .isEmail().withMessage('Invalid email!'),
    body('password')
        .trim()
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long!'),
    body('password')
        .trim()
        .custom((value, { req }) => {
            if (value && value !== req.body.rePass) {
                throw new Error('Passwords don`t match!');
            }
            return true;
        }),
    async (req, res) => {
        const { email, password, gender } = req.body;

        try {
            const errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }

            await authService.register(email, password, gender);
            const token = await authService.login(email, password);
            res.cookie(cookie_name, token);
            res.redirect('/');
        } catch (error) {
            console.log(error.message);
            res.render('register', { title: 'Register', errors: error.message.split('\n'), oldData: req.body });
        }
    });

router.get('/logout', isAuth(), (req, res) => {
    res.clearCookie(cookie_name);
    res.redirect('/');
});


router.get('/:id/profile', isAuth(), async (req, res) => {
    try {
        const user = await authService.getProfile(req.params.id);
        const trips = await tripService.getTripsByCreator(req.params.id);
        user.isMale = user.gender == 'male';
        user.hasCreated = trips.length > 0;
        user.createdTrips = trips;
        res.render('profile', { title: 'Profile', user });
    } catch (error) {
        console.log(error);
        res.render('notFound', { title: 'Error' });
    }
});

module.exports = router;