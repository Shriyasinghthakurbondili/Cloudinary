require("dotenv").config()

var express = require("express")
const connectToDatabase = require("./database/db.js")

var userRoutes = require("./Routes/userRoutes")
var productRoutes = require("./Routes/ProductRoutes.js")

var profileRoutes = require("./Routes/profileRoutes.js")

var app = express()

app.use(express.json())

app.use("/api/userRoutes", userRoutes)
app.use("/api/productRoutes", productRoutes)
app.use("/api/profileRoutes", profileRoutes)

connectToDatabase()

var port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server running on port " + port)
})