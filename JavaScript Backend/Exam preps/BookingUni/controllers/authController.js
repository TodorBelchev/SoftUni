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

        if (password.trim().length < 5) {
            throw new Error('Password must be at least 5 characters long!');
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
        if (password !== rePassword) {
            throw new Error('Passwords don`t match!');
        }
        if (password.trim().length < 5 || !password.match(/^[a-zA-Z0-9]+$/)) {
            throw new Error('Password must be at least 5 characters long and consist english letters and digits!');
        }

        await authService.register(email, username, password);
        const token = await authService.login(username, password);
        res.cookie(cookie_name, token);
        res.redirect('/');
    } catch (error) {
        let errorMSG = '';

        if (error.name === 'MongoError' && error.code === 11000) {
            errorMSG = 'Username or email already exists!'
        } else if (error.errors) {
            errorMSG = Object.values(error.errors).map(x => x.properties.message)[0];
        } else {
            errorMSG = error.message;
        }

        res.render('register', { title: 'Register', error: errorMSG, oldData: { username, email } });
    }
});

router.get('/profile/:id', async (req, res) => {
    const userData = await authService.getUserDetailsById(req.params.id);
    userData.bookedHotels = userData.bookedHotels.map(x => x.name).join(', ');
    res.render('profile', { title: 'Profile', userData });
});

router.get('/logout', isAuth(), (req, res) => {
    res.clearCookie(cookie_name);
    res.redirect('/');
});

module.exports = router;