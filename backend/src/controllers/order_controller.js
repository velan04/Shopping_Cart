const getByAllorders = (req,res) => {
    res.send({message: "orders"})
}

const getByorder = (req,res) => {
    res.send({message: "order"})
}

const createorder = (req,res) => {
    res.send({message: "create order"})
}

const updateorder = (req,res) => {
    res.send({message: "update order"})
}

const deleteorder = (req,res) => {
    res.send({message: "delete order"})
}

module.exports = {
    getByAllorders,getByorder,createorder,updateorder,deleteorder
}