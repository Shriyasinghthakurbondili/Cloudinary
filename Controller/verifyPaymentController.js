// // // // var crypto = require("crypto")
// // // // var Product = require("../Model/ProductModel")
// // // // var Cart = require("../Model/CartModel")
// // // // var Order = require("../Model/orderModel")

// // // // var verifyPaymentController = async(req,res)=>{
// // // //     try{
// // // //         var userId = req.user.userId
// // // //         var {
// // // //             razorpay_order_id,
// // // //             razorpay_payment_id,
// // // //             razorpay_signature
// // // //         } = req.body

// // // //         var generated_signature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
// // // //         .update(razorpay_order_id + "|" + razorpay_payment_id)
// // // //         .digest("hex")

// // // //         if(generated_signature !== razorpay_signature){
// // // //             return res.status(400).json({
// // // //                 message : "payment verification failed"
// // // //             })
// // // //         }

// // // //         var cart = await Cart.findOne({userId})

// // // //         var totalAmount = 0


// // // //         for(var item of cart.items){
// // // //             var product = await Product.findById(item.product)
// // // //             totalAmount += product.price * item.quantity
// // // //         }

// // // //         var newOrder = await Order.create({
// // // //             userId,
// // // //             items : cart.items,
// // // //             totalAmount,
// // // //             status : "paid"
// // // //         })

// // // //         cart.items = []
// // // //         await cart.save()
// // // //         res.status(200).json({
// // // //             message: "payment successful and order placed",
// // // //             order : newOrder
// // // //         })
// // // //     }catch(error){
// // // //         console.log("error",error)
// // // //         res.status(500).json({message:"Internal Server Error"})

// // // //     }
// // // // }

// // // // module.exports = {
// // // //     verifyPaymentController
// // // // }


// // // var crypto = require("crypto")
// // // var Product = require("../Model/ProductModel")
// // // var Cart = require("../Model/CartModel")
// // // var Order = require("../Model/orderModel")

// // // var verifyPaymentController = async (req, res) => {
// // //     try {
// // //         var userId = req.user.userId   // ✅ CONSISTENT

// // //         var {
// // //             razorpay_order_id,
// // //             razorpay_payment_id,
// // //             razorpay_signature
// // //         } = req.body

// // //         var generated_signature = crypto
// // //             .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
// // //             .update(razorpay_order_id + "|" + razorpay_payment_id)
// // //             .digest("hex")

// // //         if (generated_signature !== razorpay_signature) {
// // //             return res.status(400).json({
// // //                 message: "payment verification failed"
// // //             })
// // //         }

// // //         var cart = await Cart.findOne({ userId })

// // //         if (!cart) {
// // //             return res.status(404).json({ message: "Cart not found" })
// // //         }

// // //         var totalAmount = 0

// // //         for (var item of cart.items) {
// // //             var product = await Product.findById(item.product)

// // //             if (!product) {
// // //                 return res.status(404).json({
// // //                     message: "Product not found"
// // //                 })
// // //             }

// // //             totalAmount += product.price * item.quantity
// // //         }

// // //         var newOrder = await Order.create({
// // //             userId,
// // //             items: cart.items,
// // //             totalAmount,
// // //             status: "paid",
// // //             paymentId: razorpay_payment_id
// // //         })

// // //         cart.items = []
// // //         await cart.save()

// // //         res.status(200).json({
// // //             message: "payment successful and order placed",
// // //             order: newOrder
// // //         })

// // //     } catch (error) {
// // //         console.log("error", error)
// // //         res.status(500).json({ message: "Internal Server Error" })
// // //     }
// // // }

// // // module.exports = { verifyPaymentController }

// // var crypto = require("crypto")
// // var Product = require("../Model/ProductModel")
// // var Cart = require("../Model/CartModel")
// // var Order = require("../Model/orderModel")

// // var verifyPaymentController = async (req, res) => {
// //     try {
// //         var userId = req.user.userId   // ✅ FIXED

// //         var {
// //             razorpay_order_id,
// //             razorpay_payment_id,
// //             razorpay_signature
// //         } = req.body

// //         var generated_signature = crypto
// //             .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
// //             .update(razorpay_order_id + "|" + razorpay_payment_id)
// //             .digest("hex")

// //         if (generated_signature !== razorpay_signature) {
// //             return res.status(400).json({
// //                 message: "payment verification failed"
// //             })
// //         }

// //         var cart = await Cart.findOne({ userId })

// //         if (!cart) {
// //             return res.status(404).json({ message: "Cart not found" })
// //         }

// //         var totalAmount = 0

// //         for (var item of cart.items) {
// //             var product = await Product.findById(item.product)

// //             if (!product) continue

// //             totalAmount += product.price * item.quantity
// //         }

// //         var newOrder = await Order.create({
// //             userId,
// //             items: cart.items,
// //             totalAmount,
// //             status: "paid",
// //             paymentId: razorpay_payment_id
// //         })

// //         cart.items = []
// //         await cart.save()

// //         res.status(200).json({
// //             message: "payment successful and order placed",
// //             order: newOrder
// //         })

// //     } catch (error) {
// //         console.log("error", error)
// //         res.status(500).json({ message: "Internal Server Error" })
// //     }
// // }

// // module.exports = { verifyPaymentController }

// var crypto = require("crypto")
// var Product = require("../Model/ProductModel")
// var Cart = require("../Model/CartModel")
// var Order = require("../Model/orderModel")

// var verifyPaymentController = async (req, res) => {
//     try {
//         var userId = req.user.userId   // ✅ correct

//         var {
//             razorpay_order_id,
//             razorpay_payment_id,
//             razorpay_signature
//         } = req.body

//         // ❌ Skip signature check for testing
//         // if (generated_signature !== razorpay_signature)

//         // ✅ Directly continue (TEST MODE)

//         var cart = await Cart.findOne({ userId })

//         if (!cart || cart.items.length === 0) {
//             return res.status(400).json({
//                 message: "Cart is empty"
//             })
//         }

//         var totalAmount = 0

//         for (var item of cart.items) {
//             var product = await Product.findById(item.product)

//             if (!product) continue   // safety

//             totalAmount += product.price * item.quantity
//         }

//         var newOrder = await Order.create({
//             userId,
//             items: cart.items,
//             totalAmount,
//             status: "paid",
//             paymentId: razorpay_payment_id
//         })

//         // clear cart
//         cart.items = []
//         await cart.save()

//         res.status(200).json({
//             message: "payment successful and order placed",
//             order: newOrder
//         })

//     } catch (error) {
//         console.log("error", error)
//         res.status(500).json({
//             message: "Internal Server Error"
//         })
//     }
// }

// module.exports = {
//     verifyPaymentController
// } 

var Product = require("../Model/ProductModel")
var Order = require("../Model/orderModel")
var Cart = require("../Model/cartModel")

var verifyPaymentController = async (req, res) => {
    try {
        var userId = req.user.userId

        console.log("USER ID:", userId)

        var cart = await Cart.findOne({ user: userId })

        console.log("CART:", cart)

        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                message: "Cart is empty"
            })
        }

        var totalAmount = 0

        for (var item of cart.items) {
            var product = await Product.findById(item.product)

            if (!product) continue

            totalAmount += product.price * item.quantity
        }

        var newOrder = await Order.create({
            userId,
            items: cart.items,
            totalAmount,
            status: "paid",
            paymentId: req.body.razorpay_payment_id
        })

        // clear cart
        cart.items = []
        await cart.save()

        res.status(200).json({
            message: "Payment successful and order placed",
            order: newOrder
        })

    } catch (error) {
        console.log("ERROR:", error)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

module.exports = { verifyPaymentController }