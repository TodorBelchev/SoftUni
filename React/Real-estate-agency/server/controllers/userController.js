const { Router } = require('express');

const router = Router();

router.get('/login', (req, res) => {
    console.log('here');
    res.send('It works!');
});

module.exports = router;