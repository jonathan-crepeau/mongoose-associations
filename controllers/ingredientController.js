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

module.exports = {
    test,
    create
};