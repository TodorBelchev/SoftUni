const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { postController } = require('../controllers');

// middleware that is specific to this router

router.put('/:postId', auth(), postController.like);
router.delete('/:postId', auth(), postController.removeLike);

module.exports = router
