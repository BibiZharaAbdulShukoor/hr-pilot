const express = require("express");

const router = express.Router();

const { createEmbedding } = require("../controllers/aiController");

// ==================================
// GENERATE EMBEDDING
// ==================================

router.post("/embedding", createEmbedding);

module.exports = router;
