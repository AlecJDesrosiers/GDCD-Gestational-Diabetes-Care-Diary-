const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const dbFunction = async (dbName) => {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);

    // connect to the client
    await client.connect();

    // connect to the database (db name is provided as an argument to the function)
    const db = client.db(dbName);
    console.log("connected!");

    // close the connection to the database server
    await db.collection("Patients").insertOne({ name: "Buck Rogers" });
    client.close();
    console.log("disconnected!");
};
dbFunction("PatientsInfo");