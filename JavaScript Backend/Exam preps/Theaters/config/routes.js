const { Router } = require('express');

const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const playController = require('../controllers/playController');

const router = Router();

router.use('/', homeController);
router.use('/auth', authController);
router.use('/play', playController);

module.exports = router;