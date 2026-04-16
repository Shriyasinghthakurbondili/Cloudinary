// // var express = require("express")

// // const { 
// //   getAllProducts, 
// //   getSingleProduct, 
// //   addNewProduct, 
// //   updateProduct, 
// //   deleteProduct 
// // } = require("../Controller/ProductController")

// // const authMiddleware = require("../Middleware/authMiddleware")
// // const adminMiddleware = require("../Middleware/adminMiddleware")
// // var upload = require("../Middleware/imageMiddleware")

// // var router = express.Router()

// // Users can view all products
// // router.get("/products", authMiddleware, getAllProducts)
// // Admin only
// // router.get("/products/:id", authMiddleware, adminMiddleware, getSingleProduct)
// // Admin only
// // router.post("/addproduct", authMiddleware, upload.single("image"), addNewProduct)
// // Admin only
// // router.put("/update/:id", authMiddleware, adminMiddleware, updateProduct)
// // Admin only
// // router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteProduct)

// // router.get("/products", getAllProducts)
// // router.get("/products/:id", authMiddleware, getSingleProduct)

// // router.post("/addproduct", authMiddleware, upload.single("image"), addNewProduct)
// // router.put("/update/:id", authMiddleware, adminMiddleware, updateProduct)
// // router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteProduct)

// // module.exports = router

// // const { createLimiters } = require("../Middleware/rateLimiter")


// // const { productLimiter, adminLimiter } = createLimiters()

// // //public products->use productLimiter 
// // router.get("/products", productLimiter, getAllProducts)

// // //Single products ->normal use(optional limiter)
// // router.get("/products/:id",productLimiter, authMiddleware, getSingleProduct)

// // //Admin actions -> use adminLimiter 
// // router.post("/addproduct",adminLimiter,authMiddleware,upload.single("image"), addNewProduct)

// // router.put("/update/:id",adminLimiter,authMiddleware,adminMiddleware,updateProduct)

// // router.delete("/delete/:id",adminLimiter,authMiddleware,adminMiddleware,deleteProduct)

// var express = require("express");

// const {
//   getAllProducts,
//   getSingleProduct,
//   addNewProduct,
//   updateProduct,
//   deleteProduct,
// } = require("../Controller/ProductController");

// const authMiddleware = require("../Middleware/authMiddleware");
// const adminMiddleware = require("../Middleware/adminMiddleware");
// var upload = require("../Middleware/imageMiddleware");

// // ✅ Import limiter
// const { createLimiters } = require("../Middleware/rateLimiter");

// // ✅ Call function
// const { productLimiter, adminLimiter } = createLimiters();

// var router = express.Router();

// // 🔹 Public routes
// router.get("/products", productLimiter, getAllProducts);

// router.get(
//   "/products/:id",
//   productLimiter,
//   authMiddleware,
//   getSingleProduct
// );

// // 🔹 Admin routes
// router.post(
//   "/addproduct",
//   adminLimiter,
//   authMiddleware,
//   upload.single("image"),
//   addNewProduct
// );

// router.put(
//   "/update/:id",
//   adminLimiter,
//   authMiddleware,
//   adminMiddleware,
//   updateProduct
// );

// router.delete(
//   "/delete/:id",
//   adminLimiter,
//   authMiddleware,
//   adminMiddleware,
//   deleteProduct
// );

// module.exports = router; 
// var express = require("express");

// const {
//   getAllProducts,
//   getSingleProduct,
//   addNewProduct,
//   updateProduct,
//   deleteProduct,
// } = require("../Controller/ProductController");

// const authMiddleware = require("../Middleware/authMiddleware");
// const adminMiddleware = require("../Middleware/adminMiddleware");
// var upload = require("../Middleware/imageMiddleware");

// var router = express.Router();

// router.get("/products", getAllProducts);
// router.get("/products/:id", authMiddleware, getSingleProduct);

// router.post("/addproduct", authMiddleware, upload.single("image"), addNewProduct);
// router.put("/update/:id", authMiddleware, adminMiddleware, updateProduct);
// router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteProduct);

// module.exports = router;


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
// router.get("/products", authMiddleware, getAllProducts)
// Admin only
// router.get("/products/:id", authMiddleware, adminMiddleware, getSingleProduct)
// Admin only
// router.post("/addproduct", authMiddleware, upload.single("image"), addNewProduct)
// Admin only
// router.put("/update/:id", authMiddleware, adminMiddleware, updateProduct)
// Admin only
// router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteProduct)

router.get("/products", getAllProducts)
router.get("/products/:id", authMiddleware, getSingleProduct)

router.post("/addproduct", authMiddleware, upload.single("image"), addNewProduct)
router.put("/update/:id", authMiddleware, adminMiddleware, updateProduct)
router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteProduct)

module.exports = router