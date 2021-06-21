const { Router } = require('express');

const courseService = require('../services/courseService');

const router = Router();

router.get('/create', (req, res) => {
    res.render('course/create', { title: 'Create course' });
});

router.post('/create', async (req, res) => {
    try {
        await courseService.create(req.body);
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;