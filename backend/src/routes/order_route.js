const router = require('express').Router();
const orderController = require('../controllers/order_controller');

router.get('/', orderController.getOrders);
router.post('/',orderController.createOrder);


module.exports = router;