const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { isAuth, isCreator } = require('../middlewares/guards');
const courseService = require('../services/courseService');

const router = Router();

router.get('/create', isAuth(), (req, res) => {
    res.render('course/create', { title: 'Create course' });
});

router.post('/create',
    body('title').trim().isLength({ min: 4 }).withMessage('Title must be at least 4 characters long!'),
    body('description').trim().isLength({ min: 20 }).withMessage('Description must be at least 20 characters long!'),
    body('imageUrl').trim().matches(new RegExp('^https?')).withMessage('Image URL is invalid!'),
    body('duration').trim().isLength({ min: 4 }).withMessage('Course duration is required!'),
    async (req, res) => {
        const data = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            duration: req.body.duration,
            creator: req.user._id
        }
        try {
            const errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }

            await courseService.create(data);
            res.redirect('/');
        } catch (error) {
            res.render('course/create', { title: 'Create', errors: error.message.split('\n'), oldData: data });
        }
    });

router.get('/:id/details', isAuth(), async (req, res) => {
    const course = await courseService.getOneById(req.params.id);
    course.isCreator = course.creator == req.user._id;
    course.isEnrolled = course.enrolledUsers.some(x => x._id == req.user._id);
    res.render('course/details', { title: 'Details', course });
});

router.get('/:id/enroll', isAuth(), async (req, res) => {
    const courseId = req.params.id;
    await courseService.enroll(courseId, req.user._id);
    res.redirect(`/course/${courseId}/details`);
});

router.get('/:id/edit', isAuth(), isCreator(), async (req, res) => {
    const course = await courseService.getOneById(req.params.id);
    res.render('course/edit', { title: 'Edit', course });
});

router.post('/:id/edit', isAuth(), isCreator(),
    body('title').trim().isLength({ min: 4 }).withMessage('Title must be at least 4 characters long!'),
    body('description').trim().isLength({ min: 20 }).withMessage('Description must be at least 20 characters long!'),
    body('imageUrl').trim().matches(new RegExp('^https?')).withMessage('Image URL is invalid!'),
    body('duration').trim().isLength({ min: 4 }).withMessage('Course duration is required!'),
    async (req, res) => {
        const courseId = req.params.id;
        const data = {
            _id: req.params.id,
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            duration: req.body.duration,
            creator: req.user._id
        }
        try {
            const errors = validationResult(req).array().map(x => x.msg);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }
            
            await courseService.edit(courseId, data);
            res.redirect(`/course/${courseId}/details`);
        } catch (error) {
            res.render('course/edit', { title: 'Edit', errors: error.message.split('\n'), course: data });
        }
    });

router.get('/:id/delete', isAuth(), isCreator(), async (req, res) => {
    await courseService.deleteCourse(req.params.id);
    res.redirect('/');
});

module.exports = router;