const Product = require ('./product.js')
const mongoose = require('mongoose');


const recipeSchema = new mongoose.Schema({
    name: String,
    image: String,
    match: [Product.Schema],
    ingredients: String,
    instructions: String,
})


const RecipeCard = mongoose.model('recipe', recipeSchema);

module.exports = RecipeCard;
