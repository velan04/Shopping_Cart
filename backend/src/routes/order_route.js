const router = require('express').Router();
const orderController = require('../controllers/order_controller');

router.get('/',orderController.getByAllorders);
router.get('/:id',orderController.getByorder);
router.post('/',orderController.createorder);
router.put('/:id',orderController.updateorder);
router.delete('/:id',orderController.deleteorder);


module.exports = router;