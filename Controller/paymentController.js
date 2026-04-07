// var Cart = require("../Model/CartModel")
// var Product = require("../Model/ProductModel")
// var Order = require("../Model/orderModel")
// var razorpay = require("../config/razorpay")

// var getOrderController = async(req,res)=>{
//     try{
//         var userId = req.user.id
//         var order = await Order.find({userId})
//         res.status(200).json({
//             message : "order fetched succesfully",
//             data : order
//         })
//     }catch(error){
//         console.log("error",error)
//         res.status(500).json({message : "Internal Server Error"})
//     }
// }
// var paymentController = async(req,res)=>{
//       try{
//         var userId = req.user.id
//         var cart = await Cart.findOne({userId})

//         if(!cart || cart.items.length === 0){
//             return res.status(200).json({
//                 message : "cart is empty"
//             })
//         }

//         var totalAmount = 0 

//         for(var item of cart.items){
//             var product = await Product.findById(item.product)
//             totalAmount += product.price * item.quantity
//         }

//         var order = await razorpay.orders.create({
//             amount : totalAmount * 100,
//             currency : "INR"
//         })
//         res.status(200).json({
//             message : "checkout created", order,totalAmount 
//         })
//       }catch(error){
//         console.log("error",error)
//         res.status(500).json({"message" : "Internal Server Error"})
//       }
// }

// module.exports = {
//     paymentController , getOrderController
// }

var Cart = require("../Model/CartModel")
var Product = require("../Model/ProductModel")
var Order = require("../Model/orderModel")
var razorpay = require("../config/razorpay")

// get orders
var getOrderController = async (req, res) => {
    try {
        var userId = req.user.userId   // ✅ FIXED

        var order = await Order.find({ userId })

        res.status(200).json({
            message: "order fetched successfully",
            data: order
        })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

// checkout
var paymentController = async (req, res) => {
    try {
        var userId = req.user.userId   // ✅ FIXED

        var cart = await Cart.findOne({ userId })

        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                message: "cart is empty"
            })
        }

        var totalAmount = 0

        for (var item of cart.items) {
            var product = await Product.findById(item.product)

            if (!product) continue   // ✅ PRICE FIX

            totalAmount += product.price * item.quantity
        }

        var order = await razorpay.orders.create({
            amount: totalAmount * 100,
            currency: "INR"
        })

        res.status(200).json({
            message: "checkout created",
            order,
            totalAmount
        })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = {
    paymentController,
    getOrderController
}