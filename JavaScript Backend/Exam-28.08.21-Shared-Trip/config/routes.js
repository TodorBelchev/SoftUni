const { Router } = require('express');

const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const tripController = require('../controllers/tripController');
const notFoundController = require('../controllers/notFoundController');

const router = Router();

router.use('/', homeController);
router.use('/auth', authController);
router.use('/trips', tripController);

router.use('*', notFoundController);

module.exports = router;