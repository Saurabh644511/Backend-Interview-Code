const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0/aggregate");
    console.log("Mongodb connected");
  } catch (error) {
    console.log("Error while connecting database")
  }
};

module.exports = {connectDB}