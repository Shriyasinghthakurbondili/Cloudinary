// // var express = require('express')

// // const { paymentController, getOrderController } = require('../Controller/paymentController')
// // const { verifyPaymentController } = require('../Controller/verifyPaymentController')
// // const authMiddleware = require('../Middleware/authMiddleware')

// // var router = express.Router()

// // router.get("/order", authMiddleware, getOrderController)
// // router.post("/checkout", authMiddleware, paymentController)

// // // 👉 ADD THIS LINE
// // router.post("/verify", authMiddleware, verifyPaymentController)

// // module.exports = router


// var express = require("express");

// const {
//   createOrder,
//   verifyPaymentController
// } = require("../Controller/paymentController");

// const authMiddleware = require("../Middleware/authMiddleware");

// var router = express.Router();

// // ✅ CREATE ORDER (Razorpay)
// router.post("/create-order", authMiddleware, createOrder);

// // ✅ VERIFY PAYMENT
// router.post("/verify", authMiddleware, verifyPaymentController);

// module.exports = router; 

var express = require("express");
var router = express.Router();

const { createOrder } = require("../Controller/paymentController");
const { verifyPaymentController } = require("../Controller/verifyPaymentController");

const authMiddleware = require("../Middleware/authMiddleware");

// ✅ CREATE ORDER (Razorpay)
router.post("/checkout", authMiddleware, createOrder);

// ✅ VERIFY PAYMENT
router.post("/verify", authMiddleware, verifyPaymentController);

module.exports = router;