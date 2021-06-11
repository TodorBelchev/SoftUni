const { Router } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

    let user = await User.findOne({ username: { $regex: new RegExp(username, 'i') } }).lean();
    if (user == null) {
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        user = new User({ username, password: hashedPass });
        await user.save();
        res.redirect('/');
    } else {
        res.render('register', { error: 'Username already exists!' });
    }
});

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let user = await User.findOne({ username: { $regex: new RegExp(username, 'i') } }).lean();
    if (user == null) {
        res.render('login', { error: 'User not found!' });
    } else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ username, _id: user._id }, 'very strong secret');
            res.cookie('user', token);
            res.locals.isLogged = true;
            res.redirect('/');
        } else {
            res.render('login', { error: 'Invalid password!' });
        }
    }
});

module.exports = router;