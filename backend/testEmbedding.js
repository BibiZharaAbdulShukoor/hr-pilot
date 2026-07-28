require("dotenv").config();

const embeddingService = require("./services/embeddingService");

async function test() {
  try {
    const vector = await embeddingService.generateEmbedding(
      "React developer with Node.js and Express skills",
    );

    console.log("Vector length:", vector.length);

    console.log("First 5 values:", vector.slice(0, 5));
  } catch (error) {
    console.error(error);
  }
}

test();
