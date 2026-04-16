// const { createClient } = require("redis");

// const client = createClient({
//   url: process.env.REDIS_URL,
//   socket: {
//     tls: true,
//     rejectUnauthorized: false,
//   },
// });

// // ✅ connect here
// const connectRedis = async () => {
//   try {
//     await client.connect();
//     console.log("✅ Redis Connected");
//   } catch (error) {
//     console.log("❌ Redis Connection Error:", error);
//   }
// };

// module.exports = { client, connectRedis }; 
const { createClient} = require("redis")
const client = createClient({
  url : process.env.REDIS_URL, //your cloud URL
});

client.on("error",(err)=>{
  console.log("Redis Error: ", err)
});

// connect here
const connectRedis = async()=>{
  try{
    await client.connect();
    console.log("✅ Redis connected");
  }catch(error){
    console.log("❌ Redis Connection Error:",error)
  }
};
module.exports = {client, connectRedis}