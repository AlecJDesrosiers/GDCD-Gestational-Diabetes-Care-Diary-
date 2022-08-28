const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;
const options = {
useNewUrlParser: true,
useUnifiedTopology: true,
};

const patientDetail = async (req, res) => {
try{
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db();
    const data = await db.collection("patientDetails").insertOne;
    res.status(200).json({ status: 200, data });
  } catch (err) {
    res.status(400).json({ status: 400, message: "Couldn't find items" });
  }
};

module.exports = { patientDetail };
