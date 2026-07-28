const axios = require("axios");

exports.generateSummary = async (text) => {
  try {
    if (!text) {
      throw new Error("Text is required");
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: process.env.CHAT_MODEL,

        messages: [
          {
            role: "system",

            content:
              "You are an AI recruitment assistant. Summarize candidate CVs focusing on relevant technical skills.",
          },

          {
            role: "user",

            content: text,
          },
        ],

        temperature: 0.3,
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type": "application/json",
        },
      },
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(
      "Chat generation error:",
      error.response?.data || error.message,
    );

    throw new Error("Failed to generate AI summary");
  }
};
