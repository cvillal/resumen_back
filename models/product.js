const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category: String,
    name: String,
    image: String,
    amountLeft: Number,
    age: {
        type: Number,
        min:0,
        max:14,
    },
})


const ProductCard = mongoose.model('product', productSchema);

module.exports = ProductCard;
