const express = require("express");
const {connectDB} = require("./config/config.db")
const salesRoute = require("./routes/salesRoutes")

const app = express();
app.use(express.json())

connectDB()

app.use("/api/sales", salesRoute)

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})