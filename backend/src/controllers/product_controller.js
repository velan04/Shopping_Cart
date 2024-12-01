const productModel = require('../models/product_model');

//GetAllProducts Api - /api/products
const getByAllproducts = async(req,res) => {
    const query = req.query.keyword 
        ? {title: {$regex: req.query.keyword,$options: 'i'}} 
        : {}
    const products = await productModel.find(query)
    res.json({
        success: "true",
        products
        })
}

//GetProduct Api - /api/product/id
const getByproduct = async (req,res) => {
    try {
        const product = await productModel.findById(req.params.id);
        res.json({
        success: "true",
        product
   })
    } catch (error) {
        res.status(404).json({
        message: "unable to get product"
        })
    }
   
}

const createProduct = async (req, res) => {
    try {
        const productData = {
            ...req.body,
            image: req.file ? req.file.filename : null, // Save the uploaded image filename
        };

        const product = new productModel(productData);
        const result = await product.save();

        res.status(201).json({ success: true, product: result });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ success: false, message: 'Error creating product' });
    }
};  

const updateproduct = (req,res) => {
    res.send({message: "update product"})
}

const deleteproduct = (req,res) => {
    res.send({message: "delete product"})
}

module.exports = {
    getByAllproducts,
    getByproduct,
    createProduct,
    updateproduct,
    deleteproduct
}