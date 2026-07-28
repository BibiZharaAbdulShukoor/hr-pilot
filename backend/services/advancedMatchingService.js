// ==============================
// ADVANCED WEIGHTED MATCHING ENGINE
// ==============================

// Embedding = 70%
// Skills = 20%
// Experience = 10%

exports.calculateWeightedScore = (candidate, job, embeddingScore) => {
  // -----------------------------
  // Embedding (70%)
  // -----------------------------
  const embeddingWeight = embeddingScore * 0.7;

  // -----------------------------
  // Skills (20%)
  // -----------------------------
  const candidateSkills = Array.isArray(candidate.skills)
    ? candidate.skills
    : typeof candidate.skills === "string"
      ? candidate.skills.split(",").map((skill) => skill.trim().toLowerCase())
      : [];

  const jobSkills = Array.isArray(job.skills)
    ? job.skills
    : typeof job.skills === "string"
      ? job.skills.split(",").map((skill) => skill.trim().toLowerCase())
      : [];

  let matchedSkills = 0;

  jobSkills.forEach((skill) => {
    if (candidateSkills.includes(skill)) {
      matchedSkills++;
    }
  });

  const skillPercentage =
    jobSkills.length === 0 ? 100 : (matchedSkills / jobSkills.length) * 100;

  const skillWeight = skillPercentage * 0.2;

  // -----------------------------
  // Experience (10%)
  // -----------------------------
  const candidateExperience = Number(candidate.years_of_experience) || 0;

  const jobExperience = Number(job.experience) || 0;

  let experiencePercentage = 100;

  if (jobExperience > 0) {
    experiencePercentage =
      Math.min(candidateExperience / jobExperience, 1) * 100;
  }

  const experienceWeight = experiencePercentage * 0.1;

  // -----------------------------
  // Final Score
  // -----------------------------
  let finalScore = embeddingWeight + skillWeight + experienceWeight;

  if (finalScore > 100) {
    finalScore = 100;
  }

  if (finalScore < 0) {
    finalScore = 0;
  }

  return {
    embeddingScore: Number(embeddingScore.toFixed(2)),
    skillScore: Number(skillPercentage.toFixed(2)),
    experienceScore: Number(experiencePercentage.toFixed(2)),
    finalScore: Number(finalScore.toFixed(2)),
  };
};
