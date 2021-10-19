const { Router } = require('express');
const bcrypt = require('bcrypt');

const { getByUsername, createUser } = require('../services/userService');
const { removePass, createToken } = require('../utils');
const { COOKIE_NAME, SALT_ROUNDS } = require('../config');

const router = Router();

router.post('/login', async (req, res) => {
    try {
        const username = req.body.username.trim();
        const password = req.body.password.trim();

        if (username.trim().length < 5) {
            throw new Error('Username must be at least 5 characters long!');
        }

        if (password.trim().length < 4) {
            throw new Error('Password must be at least 4 characters long!');
        }

        const user = await getByUsername(username);

        if (!user) {
            throw new Error('Invalid credentials!');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error('Password must be at least 4 characters long!');
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
        const name = req.body.name.trim();
        const username = req.body.username.trim();
        const password = req.body.password.trim();

        if (username.trim().length < 5) {
            throw new Error('Username must be at least 5 characters long!');
        }

        if (password.trim().length < 4) {
            throw new Error('Password must be at least 4 characters long!');
        }

        if (!name.trim().match(/[a-zA-Z]{3,} [a-zA-Z]{3,}/)) {
            throw new Error('Please enter first and last name(eg. "Peter Petrov")!');
        }

        let user = await getByUsername(username);

        if (user) {
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

module.exports = router;