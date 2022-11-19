const express = require('express');
const app = express();
const PORT = process.env.PORT || 3011;

const routes = require('./routes');

app.use(express.json());

// SECTION - Views
app.get('/', (req, res) => {
    res.send('[[ Homepage ]]');
});


// ANCHOR - API Endpoint Routes

// SECTION - Ingredient Routes
app.use('/api/v1/ingredient', routes.ingredient);



app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}...`);
});