const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const authService = require('../services/authService');
const { cookie_name } = require('../config');
const { isGuest, isAuth } = require('../middlewares/guards');

const router = Router();

router.get('/login', isGuest(), (req, res) => {
    res.render('user/login', { title: 'Login' });
});

router.get('/register', isGuest(), (req, res) => {
    res.render('user/register', { title: 'Register' });
});

router.post('/login',
    isGuest(),
    body('email')
        .trim()
        .isEmail().withMessage('Invalid email!'),
    body('password')
        .trim()
        .isLength({ min: 3 }).withMessage('Password must be at least 3 characters long!')
        .isAlphanumeric().withMessage('Password must consist only english letters and digits!'),
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
            res.render('user/login', { title: 'Login', errors: error.message.split('\n'), oldData: email });
        }
    });

router.post('/register',
    isGuest(),
    body('email')
        .trim()
        .isEmail().withMessage('Invalid email!'),
    body('password')
        .trim()
        .isLength({ min: 3 }).withMessage('Password must be at least 3 characters long!')
        .isAlphanumeric().withMessage('Password must consist only english letters and digits!'),
    body('password')
        .trim()
        .custom((value, { req }) => {
            if (value && value !== req.body.rePass) {
                throw new Error('Passwords don`t match!');
            }
            return true;
        }),
    async (req, res) => {
        const { email, password } = req.body;

        try {
            const errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }

            await authService.register(email, password);
            const token = await authService.login(email, password);
            res.cookie(cookie_name, token);
            res.redirect('/');
        } catch (error) {
            res.render('user/register', { title: 'Register', errors: error.message.split('\n'), oldData: req.body });
        }
    });

router.get('/logout', isAuth(), (req, res) => {
    res.clearCookie(cookie_name);
    res.redirect('/');
});

module.exports = router;