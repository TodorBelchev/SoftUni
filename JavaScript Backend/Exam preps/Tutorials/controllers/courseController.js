const { Router } = require('express');

const courseService = require('../services/courseService');

const router = Router();

router.get('/create', (req, res) => {
    res.render('course/create', { title: 'Create course' });
});

router.post('/create', async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            duration: req.body.duration,
            creator: req.user._id
        }
        await courseService.create(data);
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
    }
});

router.get('/:id/details', async (req, res) => {
    const course = await courseService.getOne(req.params.id);
    course.isCreator = course.creator == req.user._id;
    course.isEnrolled = course.enrolledUsers.includes(req.user._id);
    res.render('course/details', { title: 'Details', course });
});


module.exports = router;