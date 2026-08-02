const candidateService = require("../services/candidateService");
const fileService = require("../services/fileService");
const embeddingService = require("../services/embeddingService");
const textService = require("../services/textService");
const notificationService = require("../services/notificationService");

// ======================================
// GET ALL CANDIDATES
// ======================================

exports.getCandidates = async (req, res, next) => {
  try {
    const result = await candidateService.getAllCandidates({
      page: Number(req.query.page) || 1,
      limit: Number(req.query.limit) || 10,
      search: req.query.search || "",
    });

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

// ======================================
// GET SINGLE CANDIDATE
// ======================================

exports.getCandidateById = async (req, res, next) => {
  try {
    const candidate = await candidateService.getCandidateById(req.params.id);

    res.status(200).json({
      success: true,
      data: candidate,
    });
  } catch (error) {
    next(error);
  }
};

// ======================================
// CREATE MANUAL CANDIDATE
// ======================================

exports.createCandidate = async (req, res, next) => {
  try {
    const candidate = await candidateService.createCandidate(req.body);

    await notificationService.create({
      title: "New Candidate",
      message: `${candidate.name} has been added.`,
      type: "success",
    });

    res.status(201).json({
      success: true,
      data: candidate,
    });
  } catch (error) {
    next(error);
  }
};

// ======================================
// UPDATE CANDIDATE
// ======================================

exports.updateCandidate = async (req, res, next) => {
  try {
    const candidate = await candidateService.updateCandidate(
      req.params.id,
      req.body,
    );

    await notificationService.create({
      title: "Candidate Updated",
      message: `${candidate.name} profile updated.`,
      type: "info",
    });

    res.status(200).json({
      success: true,
      data: candidate,
    });
  } catch (error) {
    next(error);
  }
};

// ======================================
// DELETE CANDIDATE
// ======================================

exports.deleteCandidate = async (req, res, next) => {
  try {
    const oldCandidate = await candidateService.getCandidateById(req.params.id);

    await candidateService.deleteCandidate(req.params.id);

    await notificationService.create({
      title: "Candidate Deleted",
      message: `${oldCandidate.name} removed from system.`,
      type: "info",
    });

    res.status(200).json({
      success: true,
      message: "Candidate deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// ======================================
// UPLOAD CV
// ======================================

exports.uploadCandidateCV = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      location,
      education,
      experience_level,
      years_of_experience,
      linkedin,
      github,
      portfolio,
      skills: userSkills,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "CV file is required",
      });
    }

    let cvText = await fileService.extractTextFromFile(req.file);

    console.log("RAW TEXT:", cvText);
    console.log("RAW LENGTH:", cvText?.length);

    cvText = textService.cleanText(cvText);

    console.log("CLEAN TEXT:", cvText);
    console.log("CLEAN LENGTH:", cvText.length);

    let skills = [];

    if (userSkills) {
      skills = userSkills
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    if (skills.length === 0) {
      skills = textService.extractSkills(cvText);
    }

    let embedding = null;

    if (cvText && cvText.trim().length > 0) {
      embedding = await embeddingService.generateEmbedding(cvText);
    } else {
      console.log("No readable text found in CV. Skipping embedding.");
    }
    const candidate = await candidateService.createCandidate({
      name,
      email,
      phone,
      location,
      education,
      experience_level,
      years_of_experience,
      linkedin,
      github,
      portfolio,
      skills,
      cv_text: cvText,
      embedding,
      cv_file: req.file.filename,
    });

    await notificationService.create({
      title: "New CV Uploaded",
      message: `${candidate.name} uploaded a CV.`,
      type: "success",
    });

    res.status(201).json({
      success: true,
      message: "CV uploaded successfully",
      data: candidate,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
