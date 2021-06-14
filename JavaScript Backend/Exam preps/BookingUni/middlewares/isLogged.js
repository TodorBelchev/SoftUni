const jwt = require('jsonwebtoken');
const { cookie_name, secret } = require('../config');

module.exports = () => (req, res, next) => {
    const token = req.cookies[cookie_name];
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        res.locals = decoded;
        res.locals.isLogged = true;
    } catch (error) {
        res.clearCookie(cookie_name);
    }

    next();
}