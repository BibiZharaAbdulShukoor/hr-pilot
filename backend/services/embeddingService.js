const OpenAI = require("openai");


const client = new OpenAI({

  apiKey: process.env.OPENROUTER_API_KEY,

  baseURL: "https://openrouter.ai/api/v1",

});





exports.generateEmbedding = async (text) => {


  try {


    if (!text || text.trim().length === 0) {

      throw new Error(
        "Cannot generate embedding: empty text"
      );

    }





    const response = await client.embeddings.create({


      model: "openai/text-embedding-3-small",


      input: text,


    });





    return response.data[0].embedding;



  } catch (error) {


    console.error(
      "Embedding Error:",
      error.message
    );


    throw error;


  }


};