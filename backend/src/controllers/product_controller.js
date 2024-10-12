const getByAllproducts = (req,res) => {
    res.send({message: "products"})
}

const getByproduct = (req,res) => {
    res.send({message: "product"})
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