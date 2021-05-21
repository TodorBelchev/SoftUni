function about(req, res) {

    const handlers = {
        'GET': (req, res) => {
            res.status(200).render('about');
        },
        'POST': (req, res) => {

        }
    }

    return handlers[req.method](req, res);
}

module.exports = about;