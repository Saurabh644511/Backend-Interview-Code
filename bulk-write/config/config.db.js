const mongoose = require("mongoose")

const connectDb = async()=> {
    try {
        await mongoose.connect("mongodb://0.0.0.0/bulk-write")
        console.log("Mongodb connected")
    } catch (error) {
        console.log("Error while connecting database "|| error.message)
    }
}

module.exports = connectDb;