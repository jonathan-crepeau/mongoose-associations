const mongoose = require('mongoose');
const uri = "mongodb+srv://jonathan-crepeau:my-password@mongoosecluster0.dppfgon.mongodb.net/mongoose-associations?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Initial DB connection successful...'))
    .catch((error) => console.log(error));

module.exports = {
    Ingredients: require('./Ingredient'),
    Recipe: require('./Recipe')
};