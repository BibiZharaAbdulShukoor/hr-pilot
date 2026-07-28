exports.validateCandidate = (req, res, next) => {
  const { name, cv_text } = req.body || {};

  if (!name || !cv_text) {
    return res.status(400).json({
      success: false,
      message: "Candidate name and CV text are required",
    });
  }

  next();
};

exports.validateJob = (req, res, next) => {
  const { title, description } = req.body || {};

  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Job title and description are required",
    });
  }

  next();
};
