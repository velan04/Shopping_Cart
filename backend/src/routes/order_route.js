const router = require('express').Router();
const orderController = require('../controllers/order_controller');

router.post('/',orderController.createOrder);


module.exports = router;