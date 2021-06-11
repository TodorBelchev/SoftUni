const cubeServices = require('../services/cubeServices');

const isAuth = () => (req, res, next) => {
    if (req.user !== undefined) {
        next();
    } else {
        res.redirect('/auth/login');
    }
}

const isGuest = () => (req, res, next) => {
    if (req.user == undefined) {
        next();
    } else {
        res.redirect('/');
    }
}

const isCreator = () => async (req, res, next) => {
    const cube = await cubeServices.getOneById(req.params.id);
    const isCreator = req.user && cube.creator == req.user._id;

    if (!isCreator) {
        res.redirect('/');
        return;
    } 
    next();
}

module.exports = {
    isAuth,
    isGuest,
    isCreator
}