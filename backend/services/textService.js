// ===============================
// CLEAN TEXT
// ===============================


const cleanText = (text) => {


  if (!text || typeof text !== "string") {

    return "";

  }



  return text

    .replace(/\s+/g, " ")

    .replace(/[^\w\s.,+#\-@/:]/g, "")

    .trim();


};






// ===============================
// EXTRACT SKILLS
// ===============================


const extractSkills = (text) => {


  if (!text || typeof text !== "string") {

    return [];

  }



  const skillsList = [


    "React",

    "Next.js",

    "Vue",

    "Angular",

    "JavaScript",

    "TypeScript",

    "Node.js",

    "Express",

    "Python",

    "Django",

    "Java",

    "Spring",

    "SQL",

    "MongoDB",

    "PostgreSQL",

    "AWS",

    "Docker",

    "Git",

    "Tailwind CSS",

    "Machine Learning",

    "AI",

    "TensorFlow",

    "Figma"


  ];





  const normalizedText = text.toLowerCase();




  return skillsList.filter((skill)=>


    normalizedText.includes(
      skill.toLowerCase()
    )


  );


};







// ===============================
// PREPARE EMBEDDING TEXT
// ===============================


const prepareTextForEmbedding = (text)=>{


  const cleaned = cleanText(text);



  if(!cleaned){

    return "";

  }




  return cleaned.substring(0,8000);


};







module.exports = {


  cleanText,


  extractSkills,


  prepareTextForEmbedding,


};