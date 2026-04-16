// // // // // var Cart = require("../Model/CartModel")
// // // // // var Product = require("../Model/ProductModel")
// // // // // var Order = require("../Model/orderModel")
// // // // // var razorpay = require("../config/razorpay")

// // // // // var getOrderController = async(req,res)=>{
// // // // //     try{
// // // // //         var userId = req.user.id
// // // // //         var order = await Order.find({userId})
// // // // //         res.status(200).json({
// // // // //             message : "order fetched succesfully",
// // // // //             data : order
// // // // //         })
// // // // //     }catch(error){
// // // // //         console.log("error",error)
// // // // //         res.status(500).json({message : "Internal Server Error"})
// // // // //     }
// // // // // }
// // // // // var paymentController = async(req,res)=>{
// // // // //       try{
// // // // //         var userId = req.user.id
// // // // //         var cart = await Cart.findOne({userId})

// // // // //         if(!cart || cart.items.length === 0){
// // // // //             return res.status(200).json({
// // // // //                 message : "cart is empty"
// // // // //             })
// // // // //         }

// // // // //         var totalAmount = 0 

// // // // //         for(var item of cart.items){
// // // // //             var product = await Product.findById(item.product)
// // // // //             totalAmount += product.price * item.quantity
// // // // //         }

// // // // //         var order = await razorpay.orders.create({
// // // // //             amount : totalAmount * 100,
// // // // //             currency : "INR"
// // // // //         })
// // // // //         res.status(200).json({
// // // // //             message : "checkout created", order,totalAmount 
// // // // //         })
// // // // //       }catch(error){
// // // // //         console.log("error",error)
// // // // //         res.status(500).json({"message" : "Internal Server Error"})
// // // // //       }
// // // // // }

// // // // // module.exports = {
// // // // //     paymentController , getOrderController
// // // // // }

// // // // // var Cart = require("../Model/CartModel")
// // // // // var Product = require("../Model/ProductModel")
// // // // // var Order = require("../Model/orderModel")
// // // // // var razorpay = require("../config/razorpay")

// // // // // // get orders
// // // // // var createOrder = async (req, res) => {
// // // // //     try {
// // // // //         var userId = req.user.userId   // ✅ FIXED

// // // // //         var order = await Order.find({ userId })

// // // // //         res.status(200).json({
// // // // //             message: "order fetched successfully",
// // // // //             data: order
// // // // //         })

// // // // //     } catch (error) {
// // // // //         console.log("error", error)
// // // // //         res.status(500).json({ message: "Internal Server Error" })
// // // // //     }
// // // // // }

// // // // // // checkout
// // // // // var verifyPaymentController = async (req, res) => {
// // // // //     try {
// // // // //         var userId = req.user.userId   // ✅ FIXED

// // // // //         var cart = await Cart.findOne({ userId })

// // // // //         if (!cart || cart.items.length === 0) {
// // // // //             return res.status(400).json({
// // // // //                 message: "cart is empty"
// // // // //             })
// // // // //         }

// // // // //         var totalAmount = 0

// // // // //         for (var item of cart.items) {
// // // // //             var product = await Product.findById(item.product)

// // // // //             if (!product) continue   // ✅ PRICE FIX

// // // // //             totalAmount += product.price * item.quantity
// // // // //         }

// // // // //         var order = await razorpay.orders.create({
// // // // //             amount: totalAmount * 100,
// // // // //             currency: "INR"
// // // // //         })

// // // // //         res.status(200).json({
// // // // //             message: "checkout created",
// // // // //             order,
// // // // //             totalAmount
// // // // //         })

// // // // //     } catch (error) {
// // // // //         console.log("error", error)
// // // // //         res.status(500).json({ message: "Internal Server Error" })
// // // // //     }
// // // // // }

// // // // // module.exports = {
// // // // //     createOrder,
// // // // //     verifyPaymentController
// // // // // }

// // // // var Cart = require("../Model/CartModel")
// // // // var Product = require("../Model/ProductModel")
// // // // var Order = require("../Model/orderModel")
// // // // var razorpay = require("../config/razorpay")

// // // // // get orders
// // // // var createOrder = async (req, res) => {
// // // //   try {
// // // //     res.status(200).json({
// // // //       message: "order fetched successfully",
// // // //       data: order
// // // //     })
// // // //   } catch (error) {
// // // //     console.log("error", error)
// // // //     res.status(500).json({ message: "Internal Server Error" })
// // // //   }
// // // // }

// // // // // checkout
// // // // var verifyPaymentController = async (req, res) => {
// // // //   try {
// // // //     var userId = req.body.userId
// // // //     // var userId = "69ce9d8520c015cc40c22d7c" // ✅ already correct

// // // //     console.log("USER ID:", userId)
// // // //     var cart = await Cart.findOne({ userId })

// // // //     console.log("CART:", cart)
// // // //     if (!cart || cart.items.length === 0) {
// // // //       return res.status(400).json({
// // // //         message: "cart is empty"
// // // //       })
// // // //     }

// // // //     var totalAmount = 0

// // // //     // ✅ FIXED: moved product fetch inside loop
// // // //     for (var item of cart.items) {
// // // //       var product = await Product.findById(item.product)

// // // //       if (!product) continue

// // // //       totalAmount += product.price * item.quantity
// // // //     }

// // // //     // ✅ FIXED: added receipt (optional but good)
// // // //     var order = await razorpay.orders.create({
// // // //       amount: totalAmount * 100,   // ✅ important
// // // //       currency: "INR",
// // // //       receipt: "receipt_" + Date.now()
// // // //     })

// // // //     res.status(200).json({
// // // //       message: "checkout created",
// // // //       order,
// // // //       totalAmount
   
// // // //     })

// // // //   } catch (error) {
// // // //     console.log("🔥 error", error)   // ✅ better debug
// // // //     res.status(500).json({ message: "Internal Server Error" })
// // // //   }
// // // // }

// // // // module.exports = {
// // // //   createOrder,
// // // //   verifyPaymentController
// // // // }  

// // // var Product = require("../Model/ProductModel")
// // // var Cart = require("../Model/CartModel")
// // // var razorpay = require("../config/razorpay")

// // // var createOrder = async (req, res) => {
// // //     try {
// // //         var userId = req.user.userId
       
// // //         console.log("USER:", req.user)
// // //         console.log("USER ID:", userId)
// // //         var cart = await Cart.findOne({ userId })

// // //         if (!cart || cart.items.length === 0) {
// // //             return res.status(400).json({
// // //                 message: "Cart is empty"
// // //             })
// // //         }

// // //         var totalAmount = 0

// // //         for (var item of cart.items) {
// // //             var product = await Product.findById(item.product)

// // //             if (!product) continue

// // //             totalAmount += product.price * item.quantity
// // //         }

// // //         var order = await razorpay.orders.create({
// // //             amount: totalAmount * 100,
// // //             currency: "INR",
// // //             receipt: "receipt_" + Date.now()
// // //         })

// // //         res.status(200).json({
// // //             message: "Checkout created",
// // //             order,
// // //             totalAmount
// // //         })

// // //     } catch (error) {
// // //         console.log("ERROR:", error)
// // //         res.status(500).json({
// // //             message: "Internal Server Error"
// // //         })
// // //     }
// // // }

// // // module.exports = { createOrder } 

// // var razorpay = require("../config/razorpay")
// // const Cart = require("../Model/CartModel")
// // const Product = require("../Model/ProductModel")



// // var createOrder = async (req, res) => {
// //   try {
// //     const userId = req.body.userId

// //     console.log("REQ.USER:", req.user)

// //     const cart = await Cart.findOne({ userId })

// //     if (!cart || cart.items.length === 0) {
// //       return res.status(400).json({ message: "Cart is empty" })
// //     }

// //     let totalAmount = 0

// //     for (let item of cart.items) {
// //       const product = await Product.findById(item.product)
// //       if (!product) continue

// //       totalAmount += product.price * item.quantity
// //     }

// //     const order = await razorpay.orders.create({
// //       amount: totalAmount * 100,
// //       currency: "INR",
// //       receipt: "receipt_" + Date.now()
// //     })

// //     res.status(200).json({
// //       success: true,
// //       order,
// //       totalAmount
// //     })

// //   } catch (error) {
// //   console.log("FULL ERROR 👉", error)   // 👈 ADD THIS
// //   res.status(500).json({ message: "Internal Server Error" })
// // }
// //   }


// // module.exports = { createOrder } 
// // const Razorpay = require("razorpay")
// // const Cart = require("../Model/cartModel")
// // const Product = require("../Model/ProductModel")

// // var createOrder = async (req, res) => {
// //   try {
// //     console.log("BODY:", req.body)

// //     const userId = req.body.userId

// //     const cart = await Cart.findOne({ userId })

// //     if (!cart || cart.items.length === 0) {
// //       return res.status(400).json({ message: "Cart is empty" })
// //     }

// //     let totalAmount = 0

// //     for (let item of cart.items) {
// //       const product = await Product.findById(item.product)

// //       if (!product) continue

// //       totalAmount += product.price * item.quantity
// //     }

// //     // 🔥 TEST FIX (NO RAZORPAY)
// //     return res.status(200).json({
// //       success: true,
// //       totalAmount,
// //       message: "Backend working"
// //     })

// //   } catch (error) {
// //     console.log("ERROR:", error)
// //     res.status(500).json({ message: error.message })
// //   }
// // }

// // module.exports = { createOrder }

// const Razorpay = require("razorpay")
// const Cart = require("../Model/cartModel")
// const Product = require("../Model/ProductModel")

// const paymentController = async (req, res) => {
//   try {
//     const userId = req.body.userId

//     const cart = await Cart.findOne({ userId })

//     if (!cart || cart.items.length === 0) {
//       return res.status(400).json({ message: "Cart is empty" })
//     }

//     let totalAmount = 0

//     for (let item of cart.items) {
//       const product = await Product.findById(item.product)
//       if (!product) continue

//       totalAmount += product.price * item.quantity
//     }

//     res.status(200).json({
//       success: true,
//       totalAmount,
//       message: "Backend working"
//     })

//   } catch (error) {
//     console.log("ERROR:", error)
//     res.status(500).json({ message: error.message })
//   }
// }

// // ✅ add this also (dummy for now)
// const getOrderController = (req, res) => {
//   res.send("Order fetched")
// }

// module.exports = {
//   paymentController,
//   getOrderController
// }  
const Cart = require("../Model/cartModel");
const Product = require("../Model/ProductModel");

const paymentController = async (req, res) => {
  try {
    const userId = req.body.userId;

    const cart = await Cart.findOne({ userId });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let totalAmount = 0;

    for (let item of cart.items) {
      const product = await Product.findById(item.product);
      if (!product) continue;

      totalAmount += product.price * item.quantity;
    }

    res.status(200).json({
      success: true,
      totalAmount,
      message: "Checkout success",
    });

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const getOrderController = (req, res) => {
  res.send("Order fetched");
};

module.exports = {
  paymentController,
  getOrderController,
};