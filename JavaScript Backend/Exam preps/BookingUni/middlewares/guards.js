const hotelServices = require('../services/hotelService');

function isAuth() {
    return (req, res, next) => {
        if (req.user !== undefined) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    };
};

function isGuest() {
    return (req, res, next) => {
        if (req.user == undefined) {
            next();
        } else {
            res.redirect('/');
        }
    };
};

function isCreator() {
    return async (req, res, next) => {
        const hotel = await hotelServices.getOneById(req.params.id);
        const isCreator = req.user && req.user._id == hotel.owner;

        if (!isCreator) {
            return res.redirect('/');
        }

        next();
    }
}

module.exports = {
    isAuth,
    isGuest,
    isCreator
}