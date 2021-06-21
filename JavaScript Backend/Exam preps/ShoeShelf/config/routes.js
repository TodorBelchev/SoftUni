const { Router } = require('express');

const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const shoeController = require('../controllers/shoeController');

const router = Router();

router.use('/', homeController);
router.use('/auth', authController);
router.use('/shoe', shoeController);

module.exports = router;