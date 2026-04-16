// // // // require("dotenv").config()

// // // // var express = require("express")
// // // // const connectToDatabase = require("./database/db.js")

// // // // var userRoutes = require("./Routes/userRoutes")
// // // // var productRoutes = require("./Routes/ProductRoutes")

// // // // var profileRoutes = require("./Routes/profileRoutes")

// // // // var cartRoutes = require("./Routes/cartRoutes")

// // // // var paymentRoutes = require("./Routes/paymentRoutes")
// // // // var app = express()

// // // // app.use(express.json())

// // // // app.use("/api/userRoutes", userRoutes)
// // // // app.use("/api/productRoutes", productRoutes)
// // // // app.use("/api/profileRoutes", profileRoutes)
// // // // app.use("/api/cartRoutes",cartRoutes)
// // // // app.use("/api/paymentRoutes", paymentRoutes)
// // // // connectToDatabase()

// // // // var port = process.env.PORT || 3000

// // // // app.listen(port, () => {
// // // //     console.log("Server running on port " + port)
// // // // })

// // // // require("dotenv").config();

// // // // var express = require("express");
// // // // const cors = require("cors"); // ✅ ADD THIS
// // // // const connectToDatabase = require("./database/db.js");

// // // // var userRoutes = require("./Routes/userRoutes");
// // // // var productRoutes = require("./Routes/ProductRoutes");
// // // // var profileRoutes = require("./Routes/profileRoutes");
// // // // var cartRoutes = require("./Routes/cartRoutes");
// // // // var paymentRoutes = require("./Routes/paymentRoutes");

// // // //  const {connectRedis} = require("./config/redisClient.js")

// // // // var app = express();

// // // // ✅ ADD THIS
// // // // app.use(cors({
// // // //   origin: "http://localhost:5173"
// // // // }));

// // // // app.use(cors())

// // // // app.use(express.json());

// // // // app.use("/api/userRoutes", userRoutes);
// // // // app.use("/api/productRoutes", productRoutes);
// // // // app.use("/api/profileRoutes", profileRoutes);
// // // // app.use("/api/cartRoutes", cartRoutes);
// // // // app.use("/api/paymentRoutes", paymentRoutes);

// // // // connectToDatabase();

// // // // connectRedis()

// // // // var port = process.env.PORT || 3000;

// // // // app.listen(port, () => {
// // // //   console.log("Server running on port " + port);
// // // // });  
// // // require("dotenv").config();

// // // var express = require("express");
// // // const cors = require("cors");
// // // const connectToDatabase = require("./database/db.js");

// // // var userRoutes = require("./Routes/userRoutes");
// // // var productRoutes = require("./Routes/ProductRoutes");
// // // var profileRoutes = require("./Routes/profileRoutes");
// // // var cartRoutes = require("./Routes/cartRoutes");
// // // var paymentRoutes = require("./Routes/paymentRoutes");

// // // const { connectRedis } = require("./config/redisClient.js");

// // // var app = express();

// // // // ✅ Middleware
// // // app.use(cors());
// // // app.use(express.json());

// // // // ✅ Routes
// // // app.use("/api/userRoutes", userRoutes);
// // // app.use("/api/productRoutes", productRoutes);
// // // app.use("/api/profileRoutes", profileRoutes);
// // // app.use("/api/cartRoutes", cartRoutes);
// // // app.use("/api/paymentRoutes", paymentRoutes);

// // // // ✅ DB + Redis connection
// // // connectToDatabase();
// // // connectRedis();

// // // // ✅ Server start
// // // var port = process.env.PORT || 3000;

// // // app.listen(port, () => {
// // //   console.log("Server running on port " + port);
// // // });

// // require("dotenv").config();

// // var express = require("express");
// // const cors = require("cors");
// // const connectToDatabase = require("./database/db.js");

// // var userRoutes = require("./Routes/userRoutes");
// // var productRoutes = require("./Routes/ProductRoutes");
// // var profileRoutes = require("./Routes/profileRoutes");
// // var cartRoutes = require("./Routes/cartRoutes");
// // var paymentRoutes = require("./Routes/paymentRoutes");

// // const { connectRedis } = require("./config/redisClient.js");

// // var app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Routes
// // app.use("/api/userRoutes", userRoutes);
// // app.use("/api/productRoutes", productRoutes);
// // app.use("/api/profileRoutes", profileRoutes);
// // app.use("/api/cartRoutes", cartRoutes);
// // app.use("/api/paymentRoutes", paymentRoutes);

// // // DB + Redis
// // connectToDatabase();
// // connectRedis();

// // var port = process.env.PORT || 3000;

// // app.listen(port, () => {
// //   console.log("Server running on port " + port);
// // });  
// require("dotenv").config();
// var cors = require("cors");
// var express = require("express");

// const connectToDatabase = require("./database/db.js");
// const { connectRedis } = require("./config/redisClient.js");
// const { createLimiters } = require("./Middleware/rateLimiter");

// // routes
// var userRoutes = require("./Routes/userRoutes");
// var productRoutes = require("./Routes/ProductRoutes");
// var profileRoutes = require("./Routes/profileRoutes");
// var cartRoutes = require("./Routes/cartRoutes");
// var paymentRoutes = require("./Routes/paymentRoutes");
// var orderRoutes = require("./Routes/orderRoutes");

// var app = express();

// app.use(cors());
// app.use(express.json());

// const startServer = async () => {
//   try {
//     // ✅ Connect Redis FIRST
//     await connectRedis();

//     // ✅ Create limiter AFTER Redis
//     const { productLimiter } = createLimiters();

//     // ✅ Apply limiter here
//     app.use("/api/productRoutes", productLimiter, productRoutes);

//     // Other routes
//     app.use("/api/userRoutes", userRoutes);
//     app.use("/api/profileRoutes", profileRoutes);
//     app.use("/api/cartRoutes", cartRoutes);
//     app.use("/api/paymentRoutes", paymentRoutes);
//     app.use("/api/orderRoutes", orderRoutes);

//     // DB
//     await connectToDatabase();

//     app.listen(process.env.PORT || 3000, () => {
//       console.log("🚀 Server running");
//     });

//   } catch (error) {
//     console.log("Server error:", error);
//   }
// };

// startServer(); 
// require("dotenv").config();
// var cors = require("cors");
// var express = require("express");

// const connectToDatabase = require("./database/db.js");
// const { connectRedis } = require("./config/redisClient.js");
// const { createLimiters } = require("./Middleware/rateLimiter");

// // routes
// var useRoutes = require("./Routes/userRoutes");
// var productRoutes = require("./Routes/ProductRoutes.js");
// var profileRoutes = require("./Routes/profileRoutes.js");
// var cartRoutes = require("./Routes/cartRoutes.js");
// var paymentRoutes = require("./Routes/paymentRoutes.js");
// var orderRoutes = require("./Routes/orderRoutes.js");

// var app = express();

// app.use(cors());
// app.use(express.json());



// const startServer = async () => {
//   // ✅ 1. Connect Redis FIRST
//   await connectRedis();

//   // ✅ 2. Create limiters AFTER Redis
//   const { productLimiter, adminLimiter } = createLimiters();

//   // ✅ 3. Apply limiters
//   app.use("/api/productRoutes", productLimiter, productRoutes);
//   app.use("/api/adminRoutes", adminLimiter); // optional for admin

//   // routes
//   app.use("/api/userRoutes", useRoutes);
//   app.use("/api/profileRoutes", profileRoutes);
//   app.use("/api/cartRoutes", cartRoutes);
//   app.use("/api/paymentRoutes", paymentRoutes);
//   app.use("/api/orderRoutes", orderRoutes);

//   // DB
//   await connectToDatabase();

//   app.listen(process.env.PORT, () => {
//     console.log("The server is running");
//   });
// };

// startServer();  

// require("dotenv").config()

// var express = require("express")
// const connectToDatabase = require("./database/db.js")

// var userRoutes = require("./Routes/userRoutes")
// var productRoutes = require("./Routes/ProductRoutes")

// var profileRoutes = require("./Routes/profileRoutes")

// var cartRoutes = require("./Routes/cartRoutes")

// var paymentRoutes = require("./Routes/paymentRoutes")
// var app = express()

// app.use(express.json())

// app.use("/api/userRoutes", userRoutes)
// app.use("/api/productRoutes", productRoutes)
// app.use("/api/profileRoutes", profileRoutes)
// app.use("/api/cartRoutes",cartRoutes)
// app.use("/api/paymentRoutes", paymentRoutes)
// connectToDatabase()

// var port = process.env.PORT || 3000

// app.listen(port, () => {
//     console.log("Server running on port " + port)
// })

require("dotenv").config();

var express = require("express");
const cors = require("cors"); // ✅ ADD THIS
const connectToDatabase = require("./database/db.js");

var userRoutes = require("./Routes/userRoutes");
var productRoutes = require("./Routes/ProductRoutes");
var profileRoutes = require("./Routes/profileRoutes");
var cartRoutes = require("./Routes/cartRoutes");
var paymentRoutes = require("./Routes/paymentRoutes");
var orderRoutes = require("./Routes/orderRoutes.js")

 const {connectRedis} = require("./config/redisClient.js")
 const {createLimiters} = require("./Middleware/rateLimiter.js")

var app = express();

// ✅ ADD THIS
// app.use(cors({
//   origin: "http://localhost:5173"
// }));

app.use(cors())

app.use(express.json());


const startServer = async(req,res) =>{
  // Connect REDIS First
  await connectRedis()

  // Create limiters After redis
  const { productLimiter, adminLimiter }  = createLimiters()

  // Apply Limiters
  app.use("/api/productRoutes", productLimiter, productRoutes)
  app.use("/api/adminRoutes", adminLimiter) //optional for admin


  //Routes 
  
app.use("/api/userRoutes", userRoutes);
app.use("/api/profileRoutes", profileRoutes);
app.use("/api/cartRoutes", cartRoutes);
app.use("/api/paymentRoutes", paymentRoutes);
app.use("/api/orderRoutes",orderRoutes)

await connectToDatabase();

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on port " + port);
});
}

startServer();


