const { Router } = require('express');

const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');

const router = Router();

router.use('/', homeController);
router.use('/auth', authController);

module.exports = router;