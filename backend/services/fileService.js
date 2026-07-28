const fs = require("fs");

const pdf = require("pdf-parse");

const mammoth = require("mammoth");






exports.extractTextFromFile = async (file)=>{


  try {



    if(!file){

      throw new Error(
        "No file uploaded"
      );

    }





    const filePath = file.path;



    const buffer = fs.readFileSync(filePath);







    // ======================
    // PDF
    // ======================


    if(file.mimetype === "application/pdf"){



      const data = await pdf(buffer);



      return data.text || "";



    }







    // ======================
    // DOCX
    // ======================


    if(
      file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ){



      const result =
        await mammoth.extractRawText({

          buffer

        });



      return result.value || "";



    }







    // ======================
    // DOC
    // ======================


    if(
      file.mimetype === "application/msword"
    ){


      throw new Error(
        "DOC format extraction not supported yet. Please upload DOCX or PDF."
      );


    }







    throw new Error(
      "Unsupported file type"
    );





  } catch(error){



    console.error(
      "File Extraction Error:",
      error.message
    );



    throw error;


  }


};