// const { MongoClient } = require("mongodb");
// require("dotenv").config();

// const { MONGO_URI } = process.env;
// const options = {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// };

// const createUser = async (req, res) => { 
//     console.log(req.body)
// try{
//     const client = new MongoClient(MONGO_URI, options);
//     await client.connect();
//     const db = client.db('NewUser');
//     const data = await db.collection("createUser").insertOne({
//         date: Date(),
//         body: req.body,
//     });
//     res.status(200).json({ status: 200, message:"Success New User Added"});
// } catch (err) {
//     res.status(400).json({ status: 400, message: "Couldn't add New User" });
// }
// };

// module.exports = { createUser };
