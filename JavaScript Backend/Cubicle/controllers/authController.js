const { Router } = require('express');

const authService = require('../services/authService');

const router = Router();

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/register', async (req, res) => {
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
        res.cookie('user', token);
        res.locals.isLogged = true;
        res.redirect('/');
    } catch (error) {
        res.render('register', { error: error.message });
    }
});

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    try {
        if (username.length == 0 || password.length == 0) throw new Error('All fields are required!');

        const token = await authService.login(username, password);
        res.cookie('user', token);
        res.locals.isLogged = true;
        res.redirect('/');
    } catch (error) {
        res.render('login', { error: error.message });
    }

});

module.exports = router;