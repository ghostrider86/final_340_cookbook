const express = require('express');
const router = express.Router();

const imagesController = require('../controllers/images');

router.get('/', imagesController.getAll);

router.get('/:id', imagesController.getSingle);

router.post('/', imagesController.createImage);

router.put('/:id', imagesController.updateImage);

router.delete('/:id', imagesController.deleteImage);

module.exports = router;