import Product from "../models/product.js"
import Order from "../models/order.js"
// Place Order COD : /api/order/cod
export const placeOrderCOD = async(req, res) => {
    try {
        const {userId,items,address} = req.body
        if(!address || items.length === 0){
            return res.json({success:false, message:"Address and items are required to place order"})

        }
        // calculate Amount Using Items
        let amont = await items.reduce(async(acc, item)=>{
            const product = await Product.findById(item.product);
            return (await acc) + product.offeredPrice * item.quantity;

        },0)
        // Add Tax Charges(2%)
        amount += Math.round(amount * 0.02);
        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType:"COD",
        })
     return res.json({success:true, message:"Order placed successfully"})
        
    } catch (error) {
        console.log(error.message)
        res.json({success: false , message: error.message})
        
    }
}
//  Get Orders by UserId : /api/orders/user
export const getOrders = async(req, res) => {
    try {
        const {userId} = req.body
        const orders = await Order.find({
            userId,
            $or : [{paymentType : "COD"}, {ispaid : true}]

        }).populate("items.product address").sort({createdAt : -1})
        res.json({success:true, orders})
    } catch (error) {
       console.log(error.message)
         res.json({success: false , message: error.message})
        
    }
}

// Get All Orders of seller/admin : /api/orders/seller

export const getAllOrders = async(req, res) => {
    try {
        const {userId} = req.body
        const orders = await Order.find({

            $or : [{paymentType : "COD"}, {ispaid : true}]

        }).populate("items.product address").sort({createdAt : -1})
        res.json({success:true, orders})
    } catch (error) {
       console.log(error.message)
         res.json({success: false , message: error.message})
        
    }
}
