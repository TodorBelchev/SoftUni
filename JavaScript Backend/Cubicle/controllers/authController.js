const { Router } = require('express');

const authService = require('../services/authService');
const { isGuest, isAuth } = require('../middlewares/guards');
const { cookie_name } = require('../config').development;

const router = Router();

router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register' });
});

router.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post('/register', isGuest(), async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const rePass = req.body.repeatPassword;

    if (password !== rePass) {
        res.render('register', { title: 'Register', error: 'Passwords don`t match!', oldData: { username } });
    }

    try {
        await authService.register(username, password);
        const token = await authService.login(username, password);
        res.cookie(cookie_name, token);
        res.locals.isLogged = true;
        res.redirect('/');
    } catch (error) {
        let errorMSG = '';

        if (error.name === 'MongoError' && error.code === 11000) {
            errorMSG = 'Username already exists!'
        } else {
            errorMSG = Object.values(error.errors).map(x => x.properties.message)[0];
        }

        res.render('register', { title: 'Register', error: errorMSG, oldData: { username } });
    }
});

router.post('/login', isGuest(), async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    try {
        if (username.length == 0 || password.length == 0) throw new Error('All fields are required!');

        const token = await authService.login(username, password);
        res.cookie(cookie_name, token);
        res.locals.isLogged = true;
        res.redirect('/');
    } catch (error) {
        res.render('login', { title: 'Login', error: error.message, oldData: { username } });
    }

});

router.get('/logout', isAuth(), (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
});

module.exports = router;