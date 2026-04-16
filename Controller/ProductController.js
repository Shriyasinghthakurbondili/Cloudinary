
// // var Product = require("../Model/ProductModel");
// // const { uploadToCloudinary } = require("../helper/cloudinaryhelper");
// // var {client} = require("../config/redisClient")

// // var getAllProducts = async(req,res)=>{
// //     try{

// //         var cacheKey = "allproducts"

// //         var cachedData = await client.get(cacheKey)

// //         if(cachedData){
// //             console.log("data from redis")
// //             return res.status(200).json({
// //                 products : JSON.parse(cachedData)
// //             })
// //         }

// //         var allProducts = await Product.find()
// //         await client.setEx(cacheKey, 3600, JSON.stringify(allProducts))
// //         console.log("data from mongodb")
                         
// //         res.status(200).json({products: allProducts})

// //     }catch(error){
// //         console.log("error",error)
// //     }
// // }




// // // var getAllProducts = async(req,res)=>{
// // //     try{
// // //         var allProducts =  await Product.find()
// // //         console.log(req.user);
// // //         res.status(200).json({products: allProducts})

// // //     }catch(error){
// // //         console.log("error",error);
// // //     }
// // // }


// // var getSingleProduct = async(req,res)=>{
// //     try{
// //         var id = req.params.id
// //         var cacheKey =    `product_${id}`
// //         const cachedData = await client.get(cacheKey)
// //         if(cachedData){
// //             return res.status(200).json({singleProduct: JSON.parse(cachedData)})
// //         }

// //         const singleProduct = await Product.findById(id)
// //         await client.setEx(cacheKey, 60, JSON.stringify(singleProduct))
// //         res.status(200).json(
// //             {singleProduct}
// //         )
// //     }catch(error){
// //         console.log("error",error)
// //     }
// // }


// // // var getSingleProduct = async(req,res)=>{
// // //     try{
// // //         var id = req.params.id 
// // //         var singleProduct = await  Product.findById(id)
// // //         res.status(200).json({singleProduct})

// // //     }catch(error){
// // //         console.log("error",error);
// // //     }
// // // }


// // var addNewProduct = async(req,res)=>{
// //     try{

// //         var {title,description,price} = req.body
// //         if(!req.file){
// //             return res.status(200).json({message : "file missing"})
// //         }
// //         // upload to cloudinary
// //         var {url,publicId} =  await uploadToCloudinary(req.file.path)
// //         var newProduct = await Product.create({
// //         title,
// //         description,
// //         price,
// //         image : {
// //             url,
// //             publicId
// //         }
// //     })
// //     res.status(201).json({message : "productadded",product : newProduct})
// //     }catch(error){
// //         console.log("error",error);
// //     }
// // }

// // var updateProduct = async(req,res)=>{
// //     try{
// //         var id = req.params.id 
// //         var {title,description,price} = req.body
// //         var update = await Product.findByIdAndUpdate(id,{
// //             title,
// //             description,
// //             price

// //         },{
// //             new : true
// //         })
// //         await client.del("allProducts")
// //         await client.del(`product:${id}`)
// //         res.status(201).json({message : "product updated",data : update})

// //     }catch(error){
// //         console.log("error",error);
// //     }
// // }

// // var deleteProduct = async(req,res)=>{
// //     try{
// //         var id = req.params.id 
// //         var deletePro = await Product.findByIdAndDelete(id)
// //         res.status(200).json({message : "product deleted"})
// //         await client.del("allProducts")
// //         await client.del(`product:${id}`)
// //     }catch(error){
// //         console.log("error",error);
// //     }
// // }
// // module.exports = {
// //     getAllProducts,getSingleProduct,addNewProduct,updateProduct,deleteProduct
// // }  

// var Product = require("../Model/ProductModel")
// const { uploadToCloudinary } = require("../helper/cloudinaryhelper")

// // ✅ FIXED PATH
// var { client } = require("../config/redisClient")

// // ✅ GET ALL PRODUCTS
// var getAllProducts = async (req, res) => {
//   try {
//     var page = parseInt(req.query.page) || 1
//     var limit = parseInt(req.query.limit) || 10
//     var skip = (page - 1) * limit

//     var cacheKey = `allproducts:${page}:${limit}`

//     var cachedData = await client.get(cacheKey)

//     if (cachedData) {
//       console.log("data from redis")
//       return res.status(200).json({
//         products: JSON.parse(cachedData),
//       })
//     }

//     var allProducts = await Product.find().skip(skip).limit(limit)

//     await client.setEx(cacheKey, 60, JSON.stringify(allProducts))

//     console.log("data from mongo db")

//     res.status(200).json({
//       products: allProducts,
//     })
//   } catch (error) {
//     console.log("error", error)
//   }
// }

// // ✅ GET SINGLE PRODUCT
// var getSingleProduct = async (req, res) => {
//   try {
//     var id = req.params.id
//     var cacheKey = `product:${id}`

//     const cachedData = await client.get(cacheKey)

//     if (cachedData) {
//       return res.status(200).json({
//         singleProduct: JSON.parse(cachedData),
//       })
//     }

//     const singleProduct = await Product.findById(id)

//     // ❌ you wrote stEx ❌
//     // ✅ correct:
//     await client.setEx(cacheKey, 60, JSON.stringify(singleProduct))

//     res.status(200).json({ singleProduct })
//   } catch (error) {
//     console.log("error", error)
//   }
// }

// // ✅ ADD PRODUCT
// var addNewProduct = async (req, res) => {
//   try {
//     // debug(remove later)
//     console.log("BODY:",req.body)
//     console.log("FILE:",req.file)

//     //check body first
//     if(!req.body){
//       return res.status(400).json({message:"Body is missing"})
//     }
//     var { title, description, price } = req.body

//     // check file
//     if(!req.file){
//       return res.status(400).json({message:"Image file is required"})
//     }

//     // upload image
//     const result = await uploadToCloudinary(req.file.path)
//     var newProduct = await Product.create({
//       title,
//       description,
//       price,
//       image: {
//         publicId: result.public_Id,
//         url: result.secure_url
//       }
//     });

//     //clear cache properly
//     const keys = await client.keys("allproducts:*")
//     if(keys.length>0){
//       await client.del(keys)
//     }

//     res.status(201).json({
//       message:"product added",
//       product:newProduct
//     });

//   }catch(error){
//     console.log("error",error)
//   }
// };
   


// // ✅ UPDATE
// var updateProduct = async (req, res) => {
//   try {
//     var id = req.params.id
//     var { title, description, price } = req.body

//     var update = await Product.findByIdAndUpdate(
//       id,
//       { title, description, price },
//       { new: true }
//     )

//     await client.del("allproducts")
//     await client.del(`product:${id}`)

//     res.status(201).json({
//       message: "product updated",
//       data: update
//     })
//   } catch (error) {
//     console.log("error", error)
//   }
// }

// // ✅ DELETE
// var deleteProduct = async (req, res) => {
//   try {
//     var id = req.params.id

//     await Product.findByIdAndDelete(id)

//     await client.del("allproducts")
//     await client.del(`product:${id}`)

//     res.status(200).json({
//       message: "product deleted",
//     })
//   } catch (error) {
//     console.log("error", error)
//   }
// }

// module.exports = {
//   getAllProducts,
//   getSingleProduct,
//   addNewProduct,
//   updateProduct,
//   deleteProduct,
// }  
var Product = require("../Model/ProductModel");
const { uploadToCloudinary } = require("../helper/cloudinaryhelper");
var { client } = require("../config/redisClient");

// ✅ GET ALL
var getAllProducts = async (req, res) => {
  try {
    var products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching products" });
  }
};

// ✅ GET SINGLE
var getSingleProduct = async (req, res) => {
  try {
    var product = await Product.findById(req.params.id);
    res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching product" });
  }
};

// ✅ ADD PRODUCT (🔥 FIXED IMAGE ISSUE)
var addNewProduct = async (req, res) => {
  try {
    const { title, description, price } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    // 🔥 upload
    const result = await uploadToCloudinary(req.file.path);

    console.log("CLOUDINARY:", result);

    // 🔥 FIX HERE
    const product = await Product.create({
      title,
      description,
      price,
      image: {
        publicId: result.publicId,   // ✅ MUST be public_id
        url: result.url        // ✅ MUST be secure_url
      }
    });

    res.status(201).json({
      message: "product added",
      product
    });

  } catch (err) {
    console.log(err);
  }
};
var updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    let updateData = {};   // ✅ THIS WAS MISSING

    // text fields
    if (req.body.title) updateData.title = req.body.title;
    if (req.body.description) updateData.description = req.body.description;
    if (req.body.price) updateData.price = req.body.price;

    // 🔥 IMAGE PART (MAIN FIX)
    if (req.file) {
      console.log("FILE:", req.file);

      const result = await uploadToCloudinary(req.file.path);

      console.log("CLOUD:", result);

      updateData.image = {
        publicId: result.public_id,
        url: result.secure_url
      };
    }

    const updated = await Product.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    );

    res.status(200).json({
      message: "updated",
      product: updated
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error" });
  }
};
// ✅ DELETE
var deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "deleted"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Delete failed" });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
};