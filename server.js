const express = require('express');
const app = express();
const PORT = process.env.PORT || 3011;

const routes = require('./routes');


// SECTION - Middleware
app.use(express.json());

// SECTION - Views
app.get('/', (req, res) => {
    res.send('[[ Homepage ]]');
});


// SECTION - Ingredient Routes
app.use('/api/v1/ingredient', routes.ingredient);


// SECTION - Recipe Routes
app.use('/api/v1/recipe', routes.recipe);


// SECTION - Server Start
app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}...`);
});