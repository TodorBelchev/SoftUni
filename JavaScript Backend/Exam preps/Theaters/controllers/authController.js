const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const authService = require('../services/authService');
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
    body('username')
        .trim()
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long!')
        .isAlphanumeric().withMessage('Username must consist only english letters and digits!'),
    body('password')
        .trim()
        .isLength({ min: 3 }).withMessage('Password must be at least 3 characters long!')
        .isAlphanumeric().withMessage('Password must consist only english letters and digits!'),
    async (req, res) => {
        const { username, password } = req.body;

        try {
            const errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }

            const token = await authService.login(username, password);
            res.cookie(cookie_name, token);
            res.redirect('/');
        } catch (error) {
            res.render('login', { title: 'Login', errors: error.message.split('\n'), oldData: { username } });
        }
    });

router.post('/register',
    isGuest(),
    body('username')
        .trim()
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long!')
        .isAlphanumeric().withMessage('Username must consist only english letters and digits!'),
    body('password')
        .trim()
        .isLength({ min: 3 }).withMessage('Password must be at least 3 characters long!')
        .isAlphanumeric().withMessage('Password must consist only english letters and digits!'),
    body('password')
        .trim()
        .custom((value, { req }) => {
            if (value && value !== req.body.repeatPassword) {
                throw new Error('Passwords don`t match!');
            }
            return true;
        }),
    async (req, res) => {
        const { username, password } = req.body;

        try {
            const errors = validationResult(req).array().map(x => x.msg);

            console.log(errors);
            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }

            await authService.register(username, password);
            const token = await authService.login(username, password);
            res.cookie(cookie_name, token);
            res.redirect('/');
        } catch (error) {
            res.render('register', { title: 'Register', errors: error.message.split('\n'), oldData: { username } });
        }
    });

router.get('/logout', isAuth(), (req, res) => {
    res.clearCookie(cookie_name);
    res.redirect('/');
});

module.exports = router;