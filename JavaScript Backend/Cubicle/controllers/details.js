const fs = require('fs');

function details(req, res) {

    const handlers = {
        'GET': (req, res) => {
            fs.readFile('./config/database.json', (err, data) => {
                if (err) throw err;
                const cubes = JSON.parse(data);
                const cube = cubes.find(x => x.id === req.params.id);
                console.log(cube);
                res.render('details', cube );
            });
        },
        'POST': (req, res) => {

        }
    }

    return handlers[req.method](req, res);
}

module.exports = details;