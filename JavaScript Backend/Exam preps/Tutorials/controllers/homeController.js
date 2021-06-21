const { Router } = require('express');

const courseService = require('../services/courseService');

const router = Router();

router.get('/', async (req, res) => {
    if (req.user) {
        const courses = await courseService.getAll();
        res.render('home/user', { title: 'Home', courses });
    } else {
        const courses = await courseService.getTopThreeEnrolled();
        res.render('home/guest', { title: 'Home', courses });
    }
});

module.exports = router;