const express = require("express");

const router = express.Router();

const validateRequest = require("../middleware/validateRequest");

const createApplication = require("../controllers/jobApplication.controller");

const {jobApplicationSchema} = require("../validations/jobApplications.validation");

router.post("/apply", validateRequest(jobApplicationSchema), createApplication);

module.exports = router;
