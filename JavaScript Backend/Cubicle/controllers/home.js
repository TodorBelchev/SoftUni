function home(req, res) {

    const handlers = {
        'GET': (req, res) => {
            res.render('home');
        },
        'POST': (req, res) => {

        }
    }

    return handlers[req.method](req, res);
}

module.exports = home;