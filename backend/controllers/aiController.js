const embeddingService = require("../services/embeddingService");

// ==================================
// GENERATE EMBEDDING
// ==================================

exports.createEmbedding = async (req, res, next) => {
  try {
    const { text } = req.body;

    // Validation

    if (!text || typeof text !== "string") {
      return res.status(400).json({
        success: false,

        message: "Valid text is required",
      });
    }

    const cleanedText = text.trim();

    if (cleanedText.length === 0) {
      return res.status(400).json({
        success: false,

        message: "Text cannot be empty",
      });
    }

    // Generate embedding

    const embedding = await embeddingService.generateEmbedding(cleanedText);

    res.status(200).json({
      success: true,

      message: "Embedding generated successfully",

      data: {
        embedding,

        dimensions: embedding.length,
      },
    });
  } catch (error) {
    next(error);
  }
};
