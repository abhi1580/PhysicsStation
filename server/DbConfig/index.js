const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
const connectTODb = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectTODb;
