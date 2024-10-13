const orderModel = require('../models/order_model');

//create Order - /api/orders
const getByAllorders = async(req,res) => {
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc, item) =>
        (acc + item.product.price * item.qty), 0)).toFixed(2);
    const status = "pending";

     const order = await orderModel.create({cartItems,amount,status});
    res.send({ 
        succes: "true",
        message: "orders is working", 
        order
    })
}



module.exports = {
    getByAllorders
}