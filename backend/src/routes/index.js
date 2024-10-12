const router = require('express').Router();

router.use('/products',require('./product_route'));
router.use('/orders',require('./order_route'));

module.exports = router;