const { Router } = require('express');

const homeController = require('../controllers/homeController');

const router = Router();

router.use('/', homeController);

module.exports = router;