const express = require("express");

const router = express.Router();

const {getTopCustomer} = require("../controllers/salesController");

router.get("/top-customer", getTopCustomer);

module.exports = router;