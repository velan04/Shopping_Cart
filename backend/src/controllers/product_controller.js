const productModel = require('../models/product_model')

//GetAllProducts Api - /api/products
const getByAllproducts = async(req,res) => {
    const products = await productModel.find({})
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
const createproduct = (req,res) => {
    res.send({message: "create product"})
}

const updateproduct = (req,res) => {
    res.send({message: "update product"})
}

const deleteproduct = (req,res) => {
    res.send({message: "delete product"})
}

module.exports = {
    getByAllproducts,getByproduct,createproduct,updateproduct,deleteproduct
}