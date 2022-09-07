const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;
const options = {
useNewUrlParser: true,
useUnifiedTopology: true,
};
const {sendingemail} = require("./transporter")

//adds a new patient 
const patientDetail = async (req, res) => { 
    console.log(req.body)
    sendingemail(req.body)
try{
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db('Patients');
    const existingData = await db.collection("patientDetails").findOne({
        email:req.body.email
    });
    if(existingData){
        await db.collection('patientDetails').updateOne({
            email:req.body.email
        }, {
            "$set":{...req.body, date: Date()}
        }
        )
        const data = await db.collection("patientDetails").findOne({
            email:req.body.email
        });
        return res.status(201).json({status:201, data, message:"Patient details updated"})
    }
    const data = await db.collection("patientDetails").insertOne({
        date: Date(),
        ...req.body,
    });
    res.status(200).json({ status: 200, data, message:"Success Added patient details"});
} catch (err) {
    res.status(400).json({ status: 400, message: "Couldn't add patient detials" });
}
};

//adds a new user 

const createUser = async (req, res) => { 
    console.log(req.body)
try{
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db('NewUser');
    const existingData = await db.collection("createUser").findOne({
        email:req.body.user.email
    });
    if(existingData){ 
        return res.status(400).json({status:400, message:"User already exists"})
    }
    const data = await db.collection("createUser").insertOne({
        date: Date(),
        ...req.body.user
    });
    res.status(200).json({ status: 200, message:"Success New User Created"});
} catch (err) {
    res.status(400).json({ status: 400, message: "Couldn't add New User" });
}
};

//confirms a user exists or not
const confirmUser = async (req, res) => { 
    console.log(req.body)
try{
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db('NewUser');
    const data = await db.collection("createUser").findOne({
        email:req.body.email
    });
    res.status(200).json({ status: 200, message:"Success New User Added"});
} catch (err) {
    res.status(400).json({ status: 400, message: "User already exists cannot add existing user." });
}
};

// gets the patients data 
const getpatientdetails = async(req, res) => {
    console.log(req)
    try{
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db('Patients')
        const patientDetails = await db.collection("patientDetails").findOne({
            email:req.params.email
        });
        res.status(200).json({ status: 200, data:patientDetails, message:"Data fetched"});
    }
    catch (err) {
        res.status(400).json({ status: 400, message: "Could not fetch data." });
}
};

//send Prescription info to the server
const prescriptionDetails = async (req, res) => { 
    console.log(req.body)
try{
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db('Patients');
    const existingData = await db.collection("patientDetails").findOne({
        email:req.body.email
    });
    if(existingData){
        await db.collection('patientDetails').updateOne({
            email:req.body.email
        }, {
            "$set":{...req.body, date: Date()}
        }
        )
        const data = await db.collection("patientDetails").findOne({
            email:req.body.email
        });
        return res.status(201).json({status:201, data, message:"Patient details updated"})
    }
    const data = await db.collection("patientDetails").insertOne({
        date: Date(),
        ...req.body,
    });
    res.status(200).json({ status: 200, data, message:"Success Added patient details"});
} catch (err) {
    res.status(400).json({ status: 400, message: "Couldn't add patient detials" });
}
};

module.exports = { 
    patientDetail,
    createUser, 
    confirmUser,
    getpatientdetails,
    prescriptionDetails,
};
