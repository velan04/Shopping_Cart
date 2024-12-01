const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/product_controller');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

router.get('/',productController.getByAllproducts)
router.get('/:id',productController.getByproduct)
router.post('/', upload.single('image'), productController.createProduct)
router.put('/:id',productController.updateproduct)
router.delete('/:id',productController.deleteproduct)


module.exports = router;