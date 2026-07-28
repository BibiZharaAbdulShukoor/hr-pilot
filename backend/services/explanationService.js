const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

exports.generateExplanation = async ({ candidate, job }) => {
  try {
    const prompt = `
You are an AI recruitment assistant.

Analyze the candidate and job description.

Candidate:

Name:
${candidate.name}

Skills:
${candidate.skills.join(", ")}

CV:
${candidate.cv_text}


Job:

Title:
${job.title}

Description:
${job.description}


Return a short professional recruitment explanation.

Include:

1. Why candidate matches
2. Strong skills
3. Missing skills
4. Recommendation

Keep it concise.
`;

    const response = await client.chat.completions.create({
      model: process.env.CHAT_MODEL,

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.3,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Explanation Error:", error.message);

    throw error;
  }
};
