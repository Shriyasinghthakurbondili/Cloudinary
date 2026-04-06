var express = require('express')
const { paymentController ,getOrderController} = require('../Controller/paymentController')
const authMiddleware = require('../Middleware/authMiddleware')
var router = express.Router()

router.get("/order", authMiddleware, getOrderController)
router.post("/checkout", authMiddleware, paymentController)
module.exports=router