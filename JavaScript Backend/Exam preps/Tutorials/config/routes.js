const { Router } = require('express');

const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const courseController = require('../controllers/courseController');

const router = Router();

router.use('/', homeController);
router.use('/auth', authController);
router.use('/course', courseController);

module.exports = router;