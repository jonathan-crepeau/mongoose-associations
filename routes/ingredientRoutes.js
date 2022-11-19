const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// test route
router.get('/test', controllers.ingredient.test);

// create route
router.post('/', controllers.ingredient.create);

module.exports = router;