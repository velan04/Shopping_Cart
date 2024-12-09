const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    stock: { type: Number, required: true },
    review: { type: Number, default: 0 },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    qty: { type: Number, default: 1 },
})

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;