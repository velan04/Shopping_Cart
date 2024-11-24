const orderModel = require('../models/order_model');

//create Order - /api/orders
const createOrder = async (req, res, next) => {
    const cartItems = req.body;
    const amount = cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0).toFixed(2); 
    const status = 'pending';
    
    const order = await orderModel.create({cartItems, amount, status})
    console.log(order);
    res.json({
        success:true,
        order
    })
}



module.exports = {
    createOrder
}