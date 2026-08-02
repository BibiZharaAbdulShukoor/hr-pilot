const matchingService = require("../services/matchingService");
const notificationService = require("../services/notificationService");

// ======================================
// GET AI MATCHES
// ======================================

exports.getMatches = async (req, res, next) => {
  try {
    const { jobId } = req.params;

    const result = await matchingService.matchCandidates(jobId);

    await notificationService.create({
      title: "AI Matching Completed",
      message: `${result.matches.length} candidates matched for "${result.job.title}".`,
      type: "ai",
    });

    res.status(200).json({
      success: true,
      message: "AI Matching completed successfully",
      data: result.matches,
      job: result.job,
    });
  } catch (error) {
    console.log("Matching Error:", error);
    next(error);
  }
};

// ======================================
// RUN AI MATCHING
// ======================================

exports.runMatching = async (req, res, next) => {
  try {
    const { jobId } = req.params;

    const result = await matchingService.matchCandidates(jobId);

    await notificationService.create({
      title: "AI Matching Completed",
      message: `${result.matches.length} candidates matched for "${result.job.title}".`,
      type: "ai",
    });

    res.status(200).json({
      success: true,
      message: "AI Matching completed successfully",
      data: result.matches,
      job: result.job,
    });
  } catch (error) {
    console.log("Matching Error:", error);
    next(error);
  }
};
