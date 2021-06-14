const { Router } = require('express');

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

router.post('/login', isGuest(), async (req, res) => {
    const { username, password } = req.body;

    try {
        if (username.trim().length == 0 || password.trim().length == 0) {
            throw new Error('All fields are required!');
        }

        const token = await authService.login(username, password);
        res.cookie(cookie_name, token);
        res.redirect('/');
    } catch (error) {
        res.render('login', { title: 'Login', error: error.message, oldData: { username } });
    }
});

router.post('/register', isGuest(), async (req, res) => {
    const { email, username, password, rePassword } = req.body;

    if (password !== rePassword) {
        res.render('register', { title: 'Register', error: 'Passwords don`t match!', oldData: { username, email } });
    }

    try {
        await authService.register(email, username, password);
        const token = await authService.login(username, password);
        res.cookie(cookie_name, token);
        res.redirect('/');
    } catch (error) {
        let errorMSG = '';

        if (error.name === 'MongoError' && error.code === 11000) {
            errorMSG = 'Username already exists!'
        } else {
            errorMSG = Object.values(error.errors).map(x => x.properties.message)[0];
        }

        res.render('register', { title: 'Register', error: errorMSG, oldData: { username, email } });
    }
});

router.get('/logout', isAuth(), (req, res) => {
    res.clearCookie(cookie_name);
    res.redirect('/');
});

module.exports = router;