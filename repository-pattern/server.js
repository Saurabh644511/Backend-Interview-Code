const express =require("express");
const router = require("./routes/userRoutes");
const {connectDB} = require("./config/config.db")

const app = express();
app.use(express.json());

connectDB()

app.use("/api/v1", router)

app.get("/", (req, res)=> {
    res.send("everything is going good")
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})