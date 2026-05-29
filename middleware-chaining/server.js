const express = require("express");

const profileRoutes = require("./routes/profileRoutes");

const app = express();

app.use(express.json());

app.use("/api", profileRoutes)

app.listen(5000, ()=> {
    console.log("Server is running on port 5000")
})