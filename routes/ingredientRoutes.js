const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// test route
router.get('/test', controllers.ingredient.test);

// create route
router.post('/', controllers.ingredient.create);

// read all route
router.get('/', controllers.ingredient.getAllIngredients);

module.exports = router;