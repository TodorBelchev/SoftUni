const { Router } = require('express');

const home = require('../controllers/homeController');
const cube = require('../controllers/cubeController');
const notFound = require('../controllers/notFoundController');

const router = Router();

router.use('/', home);
router.use('/cube', cube);
router.get('*', notFound);

module.exports = router;