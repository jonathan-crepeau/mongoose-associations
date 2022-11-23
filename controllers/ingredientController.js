const db = require('../models');

// GET - Test
const test = (req, res) => {
    res.json(({message: 'Ingredient API test route successful.'}));
};

// POST - Create
const create = (req, res) => {
    db.Ingredients.create(req.body, (err, createdIngredient) => {
        if (err) return res.status(500).json({
            message: 'Something went wrong here...',
            error: err,
        });
        res.json(createdIngredient);
    });
};

// GET - Read/Retreive All Ingredients
const getAllIngredients = (req, res) => {
    db.Ingredients.find({}, (err, foundIngredients) => {
        if (err) return res.status(500).json({
            message: "Something went wrong fetching all ingredients..",
            error: err
        });
        res.json(foundIngredients);
    });
};

module.exports = {
    test,
    create,
    getAllIngredients
};