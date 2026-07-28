const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

exports.generateCandidateExplanation = async ({ candidate, job, score }) => {
  try {
    const prompt = `
You are an AI recruitment assistant.

Analyze this candidate against this job.

Candidate:

Name:
${candidate.name}

Skills:
${candidate.skills}

CV:
${candidate.cv_text}


Job:

Title:
${job.title}

Description:
${job.description}


Match Score:
${score}%


Give a professional recruitment analysis.

Return:

1. Why candidate matches
2. Missing skills
3. Hiring recommendation

Keep it short and clear.
`;

    const response = await client.chat.completions.create({
      model: process.env.CHAT_MODEL || "openai/gpt-4o-mini",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.log("AI Explanation Error:", error.message);

    throw error;
  }
};
