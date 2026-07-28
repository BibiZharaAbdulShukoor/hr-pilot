const express = require("express");

const router = express.Router();

const matchingController = require("../controllers/matchingController");

router.get("/:jobId", matchingController.getMatches);

router.post("/:jobId", matchingController.runMatching);

module.exports = router;