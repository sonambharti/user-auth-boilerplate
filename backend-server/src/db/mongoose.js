const mongoose = require('mongoose');
require("dotenv").config({path: 'backend-server/config.env'});
console.log("load env file: ",process.env.ATLAS_URI)
const ATLAS_URI = process.env.ATLAS_URI
// console.log("ATLAS URI: ", ATLAS_URI);

const connectDB = async () => {
    try{
        await mongoose.connect(ATLAS_URI);
    }catch (err) {
        console.log("Error connecting to MongoDB: ", err);
    }
};

module.exports = connectDB;