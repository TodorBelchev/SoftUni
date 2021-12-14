const { Router } = require('express');

const userController = require('../controllers/userController');
const hotelsController = require('../controllers/hotelsController');

const router = Router();

router.use('/user', userController);
router.use('/hotels', hotelsController);

module.exports = router;