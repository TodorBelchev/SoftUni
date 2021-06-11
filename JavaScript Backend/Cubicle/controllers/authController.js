const { Router } = require('express');

const authService = require('../services/authService');
const { isGuest, isAuth } = require('../middlewares/guards');
const { cookie_name } = require('../config/config').development;

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

    try {
        if (username.length == 0 || password.length == 0 || rePass.length == 0) {
            throw new Error('All fields are required!');
        }
        if (password !== rePass) {
            throw new Error('Passwords don`t match!');
        }

        const hashedPass = await bcrypt.hash(req.body.password, 10);
        await authService.register(username, hashedPass);
        const token = await authService.login(username, password);
        res.cookie(cookie_name, token);
        res.locals.isLogged = true;
        res.redirect('/');
    } catch (error) {
        res.render('register', { error: error.message });
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
        res.render('login', { error: error.message });
    }

});

router.get('/logout', isAuth(), (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
});

module.exports = router;