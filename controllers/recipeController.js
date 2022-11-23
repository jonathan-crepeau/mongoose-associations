const db = require('../models');

const test = (req, res) => {
    res.json({message: 'Recipe Test Route successful..'});
};

const create = (req, res) => {
    db.Recipe.create(req.body, (err, createdRecipe) => {
        if (err) return res.status(500).json({
            message: 'Something went wrong trying to create a new recipe..',
            error: err
        });
        res.json(createdRecipe);
    });
};

const index = (req, res) => {
    db.Recipe.find({}, (err, foundRecipe) => {
        if (err) return res.status(500).json({
            message: 'Recipe not found..',
            error: err
        });
        res.json(foundRecipe);
    });
};

const find = (req, res) => {
    db.Recipe.findOne({name: req.body.name}, (err, foundRecipe) => {
        if (err) return res.status(500).json({
            message: "Could not find a recipe, something went wrong here..",
            error: err
        });
        res.json(foundRecipe);
    });
};

module.exports = {
    test,
    create,
    index,
    find
}