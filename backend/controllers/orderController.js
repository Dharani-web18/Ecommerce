const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel')

//Create Order - /api/v1/order 

exports.createOrder = async (req, res, next) => {
    const cartItems=req.body;
    const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
    const status = 'pending';
    const order = await orderModel.create({cartItems, amount, status})
    

    //Updating product stock
    

    res.json(
        {
            success:true,
            order

        }
    )
}
