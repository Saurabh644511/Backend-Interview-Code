// Rate Limiter Middleware: Write a custom Express middleware to limit a user to 5 requests per minute.

const express = require("express");
// const rateLimiter = require("./middleware/rateLimiter")
const il = require("./middleware/il")
const app = express();

app.use(il);

app.get("/", (req, res)=> {
    res.send("Api is working..")
})

app.listen(3000, ()=> {
    console.log("Server is running on port, 3000")
})

// Rate Limiter Middleware: Using Express package to limit a user to 5 requests per minute.

// const express = require("express");

// const rateLimit = require("express-rate-limit");

// const app = express();

// const limiter = rateLimit({
//     windowMs: 60 * 1000,
//     max:5,
//     message: "Too many requests, try again later"
// })

// app.use(limiter)

// app.get("/", (req, res) => {
//     res.send("Api working")
// })

// app.listen(3000, ()=> {
//     console.log("Server is running on port 3000")
// })