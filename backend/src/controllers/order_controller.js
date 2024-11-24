const orderModel = require('../models/order_model');
const productModel = require('../models/product_model');

//create Order - /api/orders
const createOrder = async (req, res, next) => {
    const cartItems = req.body;
    const amount =Number (cartItems.reduce((acc, item) => (acc + item.product.price * item.count), 0).toFixed(2)); 
    console.log(amount)
    const status = 'pending';
    const order = await orderModel.create({cartItems, amount, status})

    //updating product stock
    cartItems.forEach(async (item) => {
        const product = await productModel.findById(item.product._id);
        product.stock -= item.count;
        await product.save();
    })

    res.json({
        success:true,
        order
    })
}



module.exports = {
    createOrder
}