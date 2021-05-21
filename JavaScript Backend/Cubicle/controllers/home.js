const fs = require('fs');

function home(req, res) {

    const handlers = {
        'GET': (req, res) => {
            fs.readFile('./config/database.json', (err, data) => {
                if (err) throw err;
                const cubes = JSON.parse(data);
                res.status(200).render('home', { cubes });
            });
        },
        'POST': (req, res) => {

        }
    }

    return handlers[req.method](req, res);
}

module.exports = home;