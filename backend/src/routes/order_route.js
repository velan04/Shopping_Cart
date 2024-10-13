const router = require('express').Router();
const orderController = require('../controllers/order_controller');

router.get('/',orderController.getByAllorders);



module.exports = router;