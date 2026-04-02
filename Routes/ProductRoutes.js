var express = require("express")

const { 
  getAllProducts, 
  getSingleProduct, 
  addNewProduct, 
  updateProduct, 
  deleteProduct 
} = require("../Controller/ProductController")

const authMiddleware = require("../Middleware/authMiddleware")
const adminMiddleware = require("../Middleware/adminMiddleware")
var upload = require("../Middleware/imageMiddleware")

var router = express.Router()

// Users can view all products
router.get("/products", authMiddleware, getAllProducts)
// Admin only
router.get("/products/:id", authMiddleware, adminMiddleware, getSingleProduct)
// Admin only
router.post("/addproduct", authMiddleware, upload.single("image"), addNewProduct)
// Admin only
router.put("/update/:id", authMiddleware, adminMiddleware, updateProduct)
// Admin only
router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteProduct)

module.exports = router