const { Router } = require('express');
const bcrypt = require('bcrypt');

const { getByUsername, createUser, getByEmail } = require('../services/userService');
const { removePass, createToken } = require('../utils');
const { COOKIE_NAME, SALT_ROUNDS } = require('../config');
const { isEmail } = require('../validators');

const router = Router();

router.post('/login', async (req, res) => {
    try {
        const username = req.body.username.trim();
        const password = req.body.password.trim();

        if (username.trim().length < 1) {
            throw new Error('Username is required!');
        }

        if (password.trim().length < 6) {
            throw new Error('Password must be at least 6 characters long!');
        }

        const user = await getByUsername(username);

        if (!user) {
            throw new Error('Invalid credentials!');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error('Invalid credentials!');
        }

        const payload = removePass(user);
        const token = createToken({ id: user._id });
        res.cookie(COOKIE_NAME, token, { httpOnly: true });
        res.status(200).send(payload);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.post('/register', async (req, res) => {
    try {
        const email = req.body.email.trim();
        const username = req.body.username.trim();
        const password = req.body.password.trim();

        if (!isEmail(email)) {
            throw new Error('Invalid email!');
        }

        if (username.length < 1) {
            throw new Error('Username is required!');
        }

        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters long!');
        }

        let user = await getByUsername(username);
        let emailAlreadyRegistered = Boolean(await getByEmail(email));

        if (user || emailAlreadyRegistered) {
            throw new Error('Username already registered!');
        }

        const hashedPass = await bcrypt.hash(password, SALT_ROUNDS);
        user = await createUser(username, name, hashedPass);
        const payload = removePass(user);
        res.cookie(COOKIE_NAME, payload, { httpOnly: true });
        res.status(200).send(payload);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.status(200).send({ message: 'Logged out' })
});

module.exports = router;