const express = require("express");
const router = express.Router();

const jobController = require("../controllers/jobController");

// GET ALL
router.get("/", jobController.getJobs);

// CREATE
router.post("/", jobController.createJob);

// UPDATE
router.put("/:id", jobController.updateJob);

// DELETE
router.delete("/:id", jobController.deleteJob);

// GET SINGLE  ← 
router.get("/:id", jobController.getJobById);

module.exports = router;