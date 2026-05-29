const express  = require("express")

const logger = require("../middleware/loggerMiddleware");
const auth = require("../middleware/authMiddleware")
const validator = require("../middleware/validatorMiddleware")

const createProfile = require("../controllers/profileControllers")

const router = express.Router();

router.post("/profile", logger, auth, validator, createProfile);

module.exports = router;