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



module.exports = {
    isAuth,
    isGuest
}