const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/recipes', require('./recipes'));
router.use('/comments', require('./comments'));
router.use('/images', require('./images'));
router.use('/user', require('./user'));

module.exports = router;