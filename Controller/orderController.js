// // var Order = require("../Model/orderModel")

// // var getAllOrders = async(res,req)=>{
// //     try{
// //         var userId = req.user.userId 
// //         var allOrders = await Order.find({userId}).sort({createdAt: -1})

// //         res.status(200).json({
// //             message : "Orders fetched successfully",
// //             allOrders,
// //         })

// //     }catch(error){
// //         console.log("error",error)
// //         res.status(500).json({message:"Internal Server Error"})
// //     }
// // }

// // var getSingleOrder = async(res,req)=>{
// //     try{
// //         var userId = req.user.userId
// //         var orderId = req.params.id 
// //         var order = await Order.findOne({
// //             _id:orderId,
// //             userId : userId
// //         });
// //         if(!order){
// //             return res.status(404).json({
// //                 message: "Order not found"
// //             });
// //         }
// //     }catch(error){
// //         console.log("error",error)
// //         res.status(500).json({message: "Internal Server Error"})
// //     }
// // }

// // module.exports = {
// //     getAllOrders, getSingleOrder
// // } 

// var Order = require("../Model/orderModel")

// var getAllOrders = async (req, res) => {   // ✅ FIXED
//     try {
//         var userId = req.user.userId

//         var allOrders = await Order.find({ userId }).sort({ createdAt: -1 })

//         res.status(200).json({
//             message: "Orders fetched successfully",
//             allOrders
//         })

//     } catch (error) {
//         console.log("error", error)
//         res.status(500).json({ message: "Internal Server Error" })
//     }
// }

// var getSingleOrder = async (req, res) => {   // ✅ FIXED
//     try {
//         var userId = req.user.userId
//         var orderId = req.params.id

//         var order = await Order.findOne({
//             _id: orderId,
//             userId
//         })

//         if (!order) {
//             return res.status(404).json({
//                 message: "Order not found"
//             })
//         }

//         res.status(200).json({ order })

//     } catch (error) {
//         console.log("error", error)
//         res.status(500).json({ message: "Internal Server Error" })
//     }
// }

// module.exports = { getAllOrders, getSingleOrder }

var Order = require("../Model/orderModel")

var getAllOrders = async (req, res) => {
    try {
        var userId = req.user.userId

        var allOrders = await Order.find({ userId }).sort({ createdAt: -1 })

        res.status(200).json({
            message: "Orders fetched successfully",
            allOrders
        })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

var getSingleOrder = async (req, res) => {
    try {
        var userId = req.user.userId
        var orderId = req.params.id

        var order = await Order.findOne({
            _id: orderId,
            userId
        })

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            })
        }

        res.status(200).json({ order })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = { getAllOrders, getSingleOrder }