const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// Test Route
router.get('/test', controllers.recipe.test);

// Create Recipe Route
router.post('/', controllers.recipe.create);

// Index All Recipes
router.get('/', controllers.recipe.index);

// Find Recipe By Name
router.get('/find', controllers.recipe.find);



module.exports = router;