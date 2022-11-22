const db = require('../models');

const test = (req, res) => {
    res.json({message: 'Recipe Test Route successful..'});
};

module.exports = {
    test
}