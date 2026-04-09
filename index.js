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

var app = express();

// ✅ ADD THIS
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/api/userRoutes", userRoutes);
app.use("/api/productRoutes", productRoutes);
app.use("/api/profileRoutes", profileRoutes);
app.use("/api/cartRoutes", cartRoutes);
app.use("/api/paymentRoutes", paymentRoutes);

connectToDatabase();

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on port " + port);
});