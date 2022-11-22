const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// Test Route
router.get('/test', controllers.recipe.test);

// Create Recipe Route
router.post('/', controllers.recipe.create);

// Index All Recipes
router.get('/', controllers.recipe.addIngredient);

// Index Recipe --> id
router.get('/:id', controllers.recipe.show);



module.exports = router;