const express = require('express');
const app = express();
const PORT = process.env.PORT || 3011;

const db = require('./models');

app.get('/', (req, res) => {
    res.send('[[ Homepage ]]');
});



app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}...`);
});