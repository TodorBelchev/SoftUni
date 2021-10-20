const { Router } = require('express');

const userController = require('../controllers/userController');
const offersController = require('../controllers/offersController');

const router = Router();

router.use('/user', userController);
router.use('/offers', offersController);

module.exports = router;