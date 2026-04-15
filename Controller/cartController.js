 var Cart = require("../Model/cartModel")

// // // get cart items for a user
// // var getCart = async (req, res) => {
// //     try {
// //         var userId = req.user.UserId
// //         var cart = await Cart.findOne({ userId })

// //         if(!cart){
// //             return res.status(404).json({
// //                 message: "Cart not found"
// //             })
// //         }
// //         res.status(200).json({ cart })
// //     } catch (error) {
// //         console.log("error", error)
// //         res.status(500).json({ error: "Internal Server Error" })
// //     }
// // }

// // // add / increase / decrease item in cart
// // var addToCart = async (req, res) => {
// //     try {
// //         var userId = req.user.id
// //         var { productId, type } = req.body   // 🔥 type = "increase" or "decrease"

// //         var cart = await Cart.findOne({ userId })

// //         // if cart does not exist
// //         if (!cart) {
// //             cart = await Cart.create({
// //                 userId,
// //                 items: [
// //                     {
// //                         product: productId,
// //                         quantity: 1
// //                     }
// //                 ]
// //             })

// //             return res.status(201).json({
// //                 message: "cart created",
// //                 data: cart
// //             })
// //         }

// //         // check if product exists in cart
// //         var existingItem = cart.items.find(
// //             item => item.product && item.product.toString() === productId
// //         )

// //         if (existingItem) {

// //             if (type == "decrease") {
// //                 existingItem.quantity -= 1

// //                 // remove if quantity becomes 0
// //                 if (existingItem.quantity <= 0) {
// //                     cart.items = cart.items.filter(
// //                         item => item.product.toString() !== productId
// //                     )
// //                 }
// //             }

// //             if (type == "increase") {
// //                 existingItem.quantity += 1
// //             }

// //         } else {
// //             // if product not in cart → add new
// //             cart.items.push({
// //                 product: productId,
// //                 quantity: 1
// //             })
// //         }

// //         await cart.save()

// //         return res.status(200).json({
// //             message: "cart updated",
// //             data: cart
// //         })

// //     } catch (error) {
// //         console.log("error", error)
// //         res.status(500).json({ error: "Internal Server Error" })
// //     }
// // }

// // module.exports = {
// //     getCart,
// //     addToCart
// // }

// var Cart = require('../Model/CartModel.js')

// // get cart
// var getCart = async (req, res) => {
//     try {
//         var userId = req.user.userId   // ✅ FIXED

//         var cart = await Cart.findOne({ userId })

//         if (!cart) {
//             return res.status(404).json({
//                 message: "Cart not found"
//             })
//         }

//         res.status(200).json({ cart })

//     } catch (error) {
//         console.log("error", error)
//         res.status(500).json({ error: "Internal Server Error" })
//     }
// }

// // add/update cart
// var addToCart = async (req, res) => {
//     try {
//         var userId = req.user.userId   // ✅ FIXED
//         var { productId, type } = req.body

//         var cart = await Cart.findOne({ userId })

//         if (!cart) {
//             cart = await Cart.create({
//                 userId,
//                 items: [{
//                     product: productId,
//                     quantity: 1
//                 }]
//             })

//             return res.status(201).json({
//                 message: "cart created",
//                 data: cart
//             })
//         }

//         var existingItem = cart.items.find(
//             item => item.product.toString() === productId
//         )

//         if (existingItem) {

//             if (type === "decrease") {
//                 existingItem.quantity -= 1

//                 if (existingItem.quantity <= 0) {
//                     cart.items = cart.items.filter(
//                         item => item.product.toString() !== productId
//                     )
//                 }
//             }

//             if (type === "increase") {
//                 existingItem.quantity += 1
//             }

//         } else {
//             cart.items.push({
//                 product: productId,
//                 quantity: 1
//             })
//         }

//         await cart.save()

//         res.status(200).json({
//             message: "cart updated",
//             data: cart
//         })

//     } catch (error) {
//         console.log("error", error)
//         res.status(500).json({ error: "Internal Server Error" })
//     }
// }

// module.exports = { getCart, addToCart } 


// ✅ GET CART
var getCart = async (req, res) => {
  try {
    var userId = req.user.userId;

    var cart = await Cart.findOne({ user: userId })
      .populate("items.product"); // 🔥 IMPORTANT LINE

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    res.status(200).json({
      items: cart.items, // ✅ send only items
    });

  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// ✅ ADD TO CART (FIXED)
var addToCart = async (req, res) => {
    try {
        var userId = req.user.userId
        var { productId } = req.body   // ✅ removed type

        var cart = await Cart.findOne({ userId })

        // ✅ if cart does not exist → create new
        if (!cart) {
            cart = new Cart({
                userId,
                items: [{
                    product: productId,
                    quantity: 1
                }]
            })

            await cart.save()

            return res.status(201).json({
                message: "Cart created and item added",
                cart
            })
        }

        // ✅ check if product already exists
        var existingItem = cart.items.find(
            item => item.product.toString() === productId
        )

        if (existingItem) {
            existingItem.quantity += 1   // 🔥 FIXED (always increase)
        } else {
            cart.items.push({
                product: productId,
                quantity: 1
            })
        }

        await cart.save()

        res.status(200).json({
            message: "Item added to cart",
            cart
        })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}


module.exports = {
    getCart,
    addToCart
}