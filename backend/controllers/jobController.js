const jobService = require("../services/jobService");
const embeddingService = require("../services/embeddingService");
const textService = require("../services/textService");
const notificationService = require("../services/notificationService");

// ======================================
// GET ALL JOBS
// ======================================

exports.getJobs = async (req, res, next) => {
  try {
    const result = await jobService.getAllJobs({
      page: Number(req.query.page) || 1,
      limit: Number(req.query.limit) || 10,
      search: req.query.search || "",
    });

    res.status(200).json({
      success: true,
      data: result.data,
      pagination: result.pagination,
    });
  } catch (error) {
    next(error);
  }
};

// ======================================
// GET JOB BY ID
// ======================================

exports.getJobById = async (req, res, next) => {
  try {
    const job = await jobService.getJobById(req.params.id);

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

// ======================================
// CREATE JOB
// ======================================

exports.createJob = async (req, res, next) => {
  try {
    const {
      title,
      company,
      location,
      employment_type,
      experience,
      salary,
      description,
    } = req.body;

    if (!title || !company || !description) {
      return res.status(400).json({
        success: false,
        message: "Title, company and description are required",
      });
    }

    const cleanDescription = textService.cleanText(description);

    const skills = textService.extractSkills(cleanDescription);

    const embedding =
      await embeddingService.generateEmbedding(cleanDescription);

    const job = await jobService.createJob({
      title,
      company,
      location,
      employment_type,
      experience,
      salary,
      description: cleanDescription,
      skills,
      embedding,
    });

    await notificationService.create({
      title: "New Job Created",
      message: `${job.title} has been created.`,
      type: "success",
    });

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

// ======================================
// UPDATE JOB
// ======================================

exports.updateJob = async (req, res, next) => {
  try {
    let updateData = {
      ...req.body,
    };

    if (req.body.description) {
      const cleanDescription = textService.cleanText(req.body.description);

      updateData.description = cleanDescription;
      updateData.skills = textService.extractSkills(cleanDescription);

      updateData.embedding =
        await embeddingService.generateEmbedding(cleanDescription);
    }

    const job = await jobService.updateJob(
      req.params.id,
      updateData,
    );

    await notificationService.create({
      title: "Job Updated",
      message: `${job.title} has been updated.`,
      type: "info",
    });

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

// ======================================
// DELETE JOB
// ======================================

exports.deleteJob = async (req, res, next) => {
  try {
    const oldJob = await jobService.getJobById(req.params.id);

    await jobService.deleteJob(req.params.id);

    await notificationService.create({
      title: "Job Deleted",
      message: `${oldJob.title} has been deleted.`,
      type: "info",
    });

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};