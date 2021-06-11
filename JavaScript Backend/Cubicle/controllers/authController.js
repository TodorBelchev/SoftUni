const { Router } = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/User');

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

    if (username.length == 0 || password.length == 0 || rePass.length == 0) {
        res.render('register', { error: 'All fields are required!' });
        return;
    }

    if (password !== rePass) {
        res.render('register', { error: 'Passwords don`t match!' });
        return;
    }

    let user = await User.findOne({ username: { $regex: new RegExp(req.name, 'i') } }).lean();
    if (user == null) {
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        user = new User({ username: req.body.username, password: hashedPass });
        await user.save();
        res.redirect('/');
    } else {
        res.render('register', { error: 'Username already exists!' });
    }
});

module.exports = router;