var express = require('express')

const { paymentController, getOrderController } = require('../Controller/paymentController')
const { verifyPaymentController } = require('../Controller/verifyPaymentController')   // ✅ ADD THIS
const authMiddleware = require('../Middleware/authMiddleware')

var router = express.Router()

router.get("/order", authMiddleware, getOrderController)
router.post("/checkout", authMiddleware, paymentController)

// ✅ ADD THIS ROUTE
router.post("/verify", authMiddleware, verifyPaymentController)

module.exports = router