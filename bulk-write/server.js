const express  = require("express");
const connectDb = require("./config/config.db");
const userRoutes = require("./routes/user.routes")

const app = express();

app.use(express.json());

connectDb();

app.use("/api/users", userRoutes)

app.get("/", (req, res)=>{
    res.send("Server running...")
})

app.listen(5000, ()=> {
    console.log("Server is running on port 5000")
})