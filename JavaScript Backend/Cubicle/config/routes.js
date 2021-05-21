// TODO: Require Controllers...

module.exports = (app) => {
    // TODO...

    app.get('/', (req, res) => {
        res.render('home')
    });

    app.get('/about', (req, res) => {
        res.render('about')
    });

    app.get('/create', (req, res) => {
        res.render('create');
    });

    app.post('/create', (req, res) => {
        console.log('here');
        console.log(req);
    });
};