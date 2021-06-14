const { Router } = require('express');

const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const hotelController = require('../controllers/hotelController');

const router = Router();

router.use('/', homeController);
router.use('/auth', authController);
router.use('/hotel', hotelController);

module.exports = router;