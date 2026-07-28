const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {
  getCandidates,
  getCandidateById,
  createCandidate,
  updateCandidate,
  deleteCandidate,
  uploadCandidateCV,
} = require("../controllers/candidateController");

const { validateCandidate } = require("../middleware/validate");

// ===========================
// GET ALL CANDIDATES
// ===========================
router.get("/", getCandidates);

// ===========================
// UPLOAD CV
// ===========================
router.post("/upload", upload.single("cv"), uploadCandidateCV);

// ===========================
// GET SINGLE CANDIDATE
// ===========================
router.get("/:id", getCandidateById);

// ===========================
// CREATE CANDIDATE
// ===========================
router.post("/", validateCandidate, createCandidate);

// ===========================
// UPDATE CANDIDATE
// ===========================
router.put("/:id", updateCandidate);

// ===========================
// DELETE CANDIDATE
// ===========================
router.delete("/:id", deleteCandidate);

module.exports = router;
