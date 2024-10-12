const router = require('express').Router();
const productController = require('../controllers/product_controller');

router.get('/',productController.getByAllproducts)
router.get('/:id',productController.getByproduct)
router.post('/',productController.createproduct)
router.put('/:id',productController.updateproduct)
router.delete('/:id',productController.deleteproduct)


module.exports = router;