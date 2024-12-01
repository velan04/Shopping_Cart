const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    stock: { type: Number, required: true },
    review: { type: Number, default: 0 }, // Make review optional with a default
    image: { type: String }, // Already optional
    createdAt: { type: Date, default: Date.now },
    qty: { type: Number, default: 1 }, // Make qty optional with a default
})

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;