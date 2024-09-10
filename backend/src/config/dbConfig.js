const mongoose = require("mongoose");
require("dotenv").config();



async function dbConfig() {
  try {
    await mongoose.connect(process.env.MongodbURL);
    console.log("Database connection successfully");
  } catch (error) {
    console.log("fail to connect db");
    console.error(error);
  }
}

module.exports = dbConfig;
