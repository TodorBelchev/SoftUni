const { Router } = require('express');

const homeController = require('../controllers/homeController');
const cubeController = require('../controllers/cubeController');
const accessoryController = require('../controllers/accessoryController');
const authController = require('../controllers/authController');
const notFoundController = require('../controllers/notFoundController');

const router = Router();

router.use('/', homeController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);
router.use('/auth', authController);
router.get('*', notFoundController);

module.exports = router;