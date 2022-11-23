const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3011;

const routes = require('./routes');


// SECTION - Middleware
app.use(express.json());
app.use(express.static(`${__dirname}/public`))

// SECTION - Views
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.get('/recipes', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/recipes.html'));
});

app.get('/ingredients', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/ingredients.html'));
});

// SECTION - Ingredient Routes
app.use('/api/v1/ingredient', routes.ingredient);


// SECTION - Recipe Routes
app.use('/api/v1/recipe', routes.recipe);


// SECTION - Server Start
app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}...`);
});