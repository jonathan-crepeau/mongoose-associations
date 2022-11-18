const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    title: {
        type: String,
        default: ""
    },
    origin: {
        type: String,
        default: ""
    }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;