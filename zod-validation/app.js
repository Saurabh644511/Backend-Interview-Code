const express = require("express");

const app = express();

app.use(express.json())

app.use("/api/jobs", require("./routes/jobApplication.routes"))

module.exports = app