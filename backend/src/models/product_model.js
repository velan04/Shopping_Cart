const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    images: [
        {
            image: String
        }
    ],
    createdAt: Date,
    review: Number,
    qty: Number,
})

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;