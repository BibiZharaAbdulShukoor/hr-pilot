const supabase = require("../config/supabase");

const aiExplanationService = require("./aiExplanationService");

const advancedMatchingService = require("./advancedMatchingService");

// =============================
// COSINE SIMILARITY
// =============================

function cosineSimilarity(vecA, vecB) {
  if (!Array.isArray(vecA) || !Array.isArray(vecB)) {
    return 0;
  }

  const dot = vecA.reduce(
    (sum, value, index) => sum + value * (vecB[index] || 0),
    0,
  );

  const magA = Math.sqrt(vecA.reduce((sum, value) => sum + value * value, 0));

  const magB = Math.sqrt(vecB.reduce((sum, value) => sum + value * value, 0));

  if (!magA || !magB) {
    return 0;
  }

  return dot / (magA * magB);
}

// =============================
// FORMAT SKILLS
// =============================

function formatSkills(skills) {
  if (Array.isArray(skills)) {
    return skills;
  }

  if (typeof skills === "string") {
    return skills
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

// =============================
// PARSE EMBEDDING
// =============================

function parseEmbedding(value) {
  if (!value) {
    return null;
  }

  if (Array.isArray(value)) {
    return value;
  }

  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

// =============================
// ADVANCED MATCHING
// =============================

exports.matchCandidates = async (jobId) => {
  // GET JOB

  const { data: job, error: jobError } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", jobId)
    .single();

  if (jobError) {
    throw new Error(jobError.message);
  }

  const jobEmbedding = parseEmbedding(job.embedding);

  if (!jobEmbedding) {
    throw new Error("Job embedding not found");
  }

  // GET CANDIDATES

  const { data: candidates, error: candidateError } = await supabase
    .from("candidates")
    .select("*");

  if (candidateError) {
    throw new Error(candidateError.message);
  }

  let results = [];

  // LOOP CANDIDATES

  for (const candidate of candidates) {
    const candidateEmbedding = parseEmbedding(candidate.embedding);

    if (!candidateEmbedding) {
      continue;
    }

    // EMBEDDING SCORE

    const similarity = cosineSimilarity(jobEmbedding, candidateEmbedding);

    const embeddingScore = similarity * 100;

    // WEIGHTED SCORE

    const weighted = advancedMatchingService.calculateWeightedScore(
      candidate,
      job,
      embeddingScore,
    );

    results.push({
      candidate_id: candidate.id,

      name: candidate.name,

      email: candidate.email,

      skills: formatSkills(candidate.skills),

      // SCORE DETAILS

      embeddingScore: weighted.embeddingScore,

      skillScore: weighted.skillScore,

      experienceScore: weighted.experienceScore,

      // FINAL AI SCORE

      score: weighted.finalScore,

      candidate,
    });
  }

  // SORT BEST MATCH

  results.sort((a, b) => b.score - a.score);

  // AI EXPLANATION

  for (const item of results) {
    try {
      item.explanation =
        await aiExplanationService.generateCandidateExplanation({
          candidate: item.candidate,

          job,

          score: item.score,
        });
    } catch (error) {
      item.explanation = "AI explanation unavailable";
    }

    delete item.candidate;
  }

  return {
    job,

    matches: results,
  };
};
