const express = require("express");

const importBulkUsers = require("../controllers/user.controller")

const router = express.Router()

router.post("/bulk-import", importBulkUsers)

module.exports = router