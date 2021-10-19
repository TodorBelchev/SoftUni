const { Router } = require('express');
const bcrypt = require('bcrypt');

const { getByUsername } = require('../services/userService');
const { removePass, createToken } = require('../utils');
const { COOKIE_NAME } = require('../config');

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

module.exports = router;