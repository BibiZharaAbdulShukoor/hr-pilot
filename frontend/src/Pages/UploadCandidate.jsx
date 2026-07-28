import { useState } from "react";

import {
  UploadCloud,
  FileText,
  CheckCircle,
  XCircle,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Globe,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";


import { useNavigate } from "react-router-dom";


import { uploadCandidateCV } from "../api/dashboardApi";


import ProgressBar from "../components/ProgressBar";





export default function UploadCandidate(){



const navigate = useNavigate();





const [formData,setFormData] = useState({

name:"",

email:"",

phone:"",

location:"",

education:"",

experience_level:"Junior",

years_of_experience:"",

skills:"",

linkedin:"",

github:"",

portfolio:"",

});





const [file,setFile] = useState(null);

const [loading,setLoading] = useState(false);

const [progress,setProgress] = useState(0);

const [message,setMessage] = useState("");

const [error,setError] = useState("");








function handleChange(e){

setFormData({

...formData,

[e.target.name]:e.target.value

});


}








function handleFile(e){


const selected = e.target.files[0];


if(!selected) return;



const allowed=[

"application/pdf",

"application/msword",

"application/vnd.openxmlformats-officedocument.wordprocessingml.document"

];



if(!allowed.includes(selected.type)){


setError(
"Only PDF, DOC and DOCX files are allowed"
);


return;


}



setFile(selected);

setError("");



}









async function handleSubmit(e){


e.preventDefault();


setError("");

setMessage("");



if(!file){


setError("Please select CV file");

return;


}



const data = new FormData();



Object.keys(formData).forEach((key)=>{


data.append(
key,
formData[key]
);


});



data.append(
"cv",
file
);





try{


setLoading(true);

setProgress(10);



const response = await uploadCandidateCV(

data,

{

onUploadProgress:(event)=>{


const percent = Math.round(

(event.loaded * 100) / event.total

);


setProgress(percent);


}

}


);



console.log(response.data);



setProgress(100);



setMessage(
"Candidate uploaded successfully 🎉"
);



setTimeout(()=>{

navigate("/candidates");

},1500);



}

catch(err){


console.log(err);


setError(

err.response?.data?.message ||

"Upload failed"

);


}

finally{


setLoading(false);


}



}









return (

<div className="space-y-10">






{/* HERO */}


<section

className="

relative

overflow-hidden

rounded-[2rem]

p-10

text-white

shadow-2xl


bg-gradient-to-br

from-[#0CA0C7]

via-[#38BDF8]

to-[#61D7E5]


dark:from-[#111827]

dark:via-[#0f172a]

dark:to-[#020617]


border

border-white/30

dark:border-white/10

"


>


<div

className="

absolute

w-96

h-96

rounded-full

bg-white/30

dark:bg-[#0CA0C7]/20

blur-3xl

right-[-120px]

top-[-120px]

"

/>



<div

className="

relative

flex

items-center

gap-5

"

>


<div

className="

p-5

rounded-3xl

bg-white/20

dark:bg-white/10

backdrop-blur-xl

border

border-white/20

"

>

<UploadCloud size={45}/>

</div>



<div>


<h1

className="

text-5xl

font-black

"

>

Upload Candidate CV 🚀

</h1>



<p

className="

mt-3

text-white/90

"

>

AI extracts skills and creates candidate embeddings automatically.

</p>



</div>



</div>



</section>







{/* FORM START */}


<form


onSubmit={handleSubmit}


className="

relative

overflow-hidden


bg-gradient-to-br

from-white

via-cyan-50

to-white


dark:from-[#111827]

dark:via-[#0f172a]

dark:to-[#020617]


rounded-[2rem]

p-8

shadow-xl


border

border-white/60

dark:border-white/10

"


>


<div

className="

absolute

w-40

h-40

right-[-50px]

top-[-50px]

rounded-full

bg-[#61D7E5]/30

dark:bg-[#0CA0C7]/20

blur-3xl

"

/>


<div className="relative z-10">


<div className="grid md:grid-cols-2 gap-6">

{/* NAME */}

<div>

<label
className="
font-bold
text-slate-700
dark:text-white
"
>
Full Name
</label>


<div className="relative mt-2">


<User

className="
absolute
left-4
top-4
text-slate-400
"

/>


<input

name="name"

value={formData.name}

onChange={handleChange}

placeholder="John Smith"

className="
w-full
pl-12
p-4
rounded-2xl

border
border-slate-200
dark:border-white/10

bg-white
dark:bg-white/10

text-slate-800
dark:text-white

outline-none

focus:ring-2
focus:ring-[#0CA0C7]
"

/>


</div>

</div>






{/* EMAIL */}

<div>

<label
className="
font-bold
text-slate-700
dark:text-white
"
>
Email
</label>


<div className="relative mt-2">


<Mail

className="
absolute
left-4
top-4
text-slate-400
"

/>


<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="example@gmail.com"

className="
w-full
pl-12
p-4
rounded-2xl

border
border-slate-200
dark:border-white/10

bg-white
dark:bg-white/10

text-slate-800
dark:text-white

outline-none

focus:ring-2
focus:ring-[#0CA0C7]
"

/>


</div>

</div>







{/* PHONE */}

<div>

<label
className="
font-bold
text-slate-700
dark:text-white
"
>
Phone
</label>


<div className="relative mt-2">


<Phone

className="
absolute
left-4
top-4
text-slate-400
"

/>


<input

name="phone"

value={formData.phone}

onChange={handleChange}

placeholder="+93xxxxxxxxx"

className="
w-full
pl-12
p-4
rounded-2xl

border
border-slate-200
dark:border-white/10

bg-white
dark:bg-white/10

text-slate-800
dark:text-white

outline-none

focus:ring-2
focus:ring-[#0CA0C7]
"

/>


</div>

</div>







{/* LOCATION */}

<div>

<label
className="
font-bold
text-slate-700
dark:text-white
"
>
Location
</label>


<div className="relative mt-2">


<MapPin

className="
absolute
left-4
top-4
text-slate-400
"

/>


<input

name="location"

value={formData.location}

onChange={handleChange}

placeholder="Kabul"

className="
w-full
pl-12
p-4
rounded-2xl

border
border-slate-200
dark:border-white/10

bg-white
dark:bg-white/10

text-slate-800
dark:text-white

outline-none

focus:ring-2
focus:ring-[#0CA0C7]
"

/>


</div>

</div>







{/* EDUCATION */}

<div>

<label
className="
font-bold
text-slate-700
dark:text-white
"
>
Education
</label>


<div className="relative mt-2">


<GraduationCap

className="
absolute
left-4
top-4
text-slate-400
"

/>


<input

name="education"

value={formData.education}

onChange={handleChange}

placeholder="Bachelor Computer Science"

className="
w-full
pl-12
p-4
rounded-2xl

border
border-slate-200
dark:border-white/10

bg-white
dark:bg-white/10

text-slate-800
dark:text-white

outline-none

focus:ring-2
focus:ring-[#0CA0C7]
"

/>


</div>

</div>







{/* EXPERIENCE LEVEL */}

<div>

<label

className="
font-bold
text-slate-700
dark:text-white
"

>
Experience Level
</label>



<select

name="experience_level"

value={formData.experience_level}

onChange={handleChange}

className="
w-full
mt-2
p-4
rounded-2xl

border
border-slate-200
dark:border-white/10

bg-white
dark:bg-white/10

text-slate-800
dark:text-white

outline-none

focus:ring-2
focus:ring-[#0CA0C7]
"

>


<option>Junior</option>

<option>Mid</option>

<option>Senior</option>


</select>


</div>







{/* YEARS OF EXPERIENCE */}

<div>

<label

className="
font-bold
text-slate-700
dark:text-white
"

>
Years Of Experience
</label>


<div className="relative mt-2">


<Briefcase

className="
absolute
left-4
top-4
text-slate-400
"

/>


<input

type="number"

name="years_of_experience"

value={formData.years_of_experience}

onChange={handleChange}

placeholder="2"

className="
w-full
pl-12
p-4
rounded-2xl

border
border-slate-200
dark:border-white/10

bg-white
dark:bg-white/10

text-slate-800
dark:text-white

outline-none

focus:ring-2
focus:ring-[#0CA0C7]
"

/>


</div>

</div>







{/* SKILLS */}

<div className="md:col-span-2">


<label

className="
font-bold
text-slate-700
dark:text-white
"

>
Skills
</label>


<div className="relative mt-2">


<Sparkles

className="
absolute
left-4
top-4
text-slate-400
"

/>


<input

name="skills"

value={formData.skills}

onChange={handleChange}

placeholder="React, Node.js, AI, SQL"

className="
w-full
pl-12
p-4
rounded-2xl

border
border-slate-200
dark:border-white/10

bg-white
dark:bg-white/10

text-slate-800
dark:text-white

outline-none

focus:ring-2
focus:ring-[#0CA0C7]
"

/>


</div>

</div>

{/* LINKS */}

<div className="md:col-span-2 grid md:grid-cols-3 gap-6 mt-4">


{/* PORTFOLIO */}

<div>

<label
className="
font-bold
text-slate-700
dark:text-white
"
>
Portfolio
</label>


<div className="relative mt-2">


<Globe

className="
absolute
left-4
top-4
text-slate-400
"

/>


<input

name="portfolio"

value={formData.portfolio}

onChange={handleChange}

placeholder="https://"

className="
w-full
pl-12
p-4
rounded-2xl

border
border-slate-200
dark:border-white/10

bg-white
dark:bg-white/10

text-slate-800
dark:text-white

outline-none

focus:ring-2
focus:ring-[#0CA0C7]
"

/>


</div>

</div>






{/* GITHUB */}

<div>

<label
className="
font-bold
text-slate-700
dark:text-white
"
>
Github
</label>


<div className="relative mt-2">


<Github

className="
absolute
left-4
top-4
text-slate-400
"

/>


<input

name="github"

value={formData.github}

onChange={handleChange}

placeholder="Github URL"

className="
w-full
pl-12
p-4
rounded-2xl

border
border-slate-200
dark:border-white/10

bg-white
dark:bg-white/10

text-slate-800
dark:text-white

outline-none

focus:ring-2
focus:ring-[#0CA0C7]
"

/>


</div>

</div>







{/* LINKEDIN */}

<div>

<label
className="
font-bold
text-slate-700
dark:text-white
"
>
Linkedin
</label>


<div className="relative mt-2">


<Linkedin

className="
absolute
left-4
top-4
text-slate-400
"

/>


<input

name="linkedin"

value={formData.linkedin}

onChange={handleChange}

placeholder="Linkedin URL"

className="
w-full
pl-12
p-4
rounded-2xl

border
border-slate-200
dark:border-white/10

bg-white
dark:bg-white/10

text-slate-800
dark:text-white

outline-none

focus:ring-2
focus:ring-[#0CA0C7]
"

/>


</div>

</div>


</div>







{/* CV UPLOAD */}


<div

className="
mt-8

border-2
border-dashed

border-[#0CA0C7]

dark:border-[#61D7E5]

rounded-3xl

p-10

text-center

transition

hover:bg-cyan-50

dark:hover:bg-white/5

"

>


<UploadCloud

size={55}

className="
mx-auto
text-[#0CA0C7]
dark:text-[#61D7E5]
"

/>



<label className="cursor-pointer block mt-4">


<p

className="
font-bold
text-slate-700
dark:text-white
"

>
Select Candidate CV
</p>


<input

type="file"

accept=".pdf,.doc,.docx"

className="hidden"

onChange={handleFile}

/>


</label>





{file && (

<div

className="
mt-5
flex
justify-center
items-center
gap-3

text-green-600

font-bold
"

>

<FileText size={22}/>

{file.name}

</div>

)}


</div>








{/* PROGRESS */}


{loading && (

<ProgressBar progress={progress}/>

)}








{/* BUTTON */}


<button

disabled={loading}

className="
w-full

mt-8

py-4

rounded-2xl


bg-gradient-to-r

from-[#0CA0C7]

to-[#61D7E5]


dark:from-[#111827]

dark:via-[#0f172a]

dark:to-[#020617]


text-white

font-black

text-lg


shadow-xl

transition-all

hover:scale-105

disabled:opacity-50

"

>


{

loading

?

"Uploading..."

:

"Upload Candidate"

}


</button>







{/* MESSAGE */}


{message && (

<div

className="
mt-5

flex

justify-center

items-center

gap-2

text-green-600

font-bold

"

>

<CheckCircle/>

{message}

</div>

)}







{/* ERROR */}

{error && (

<div

className="
mt-5

flex

justify-center

items-center

gap-2

text-red-600

font-bold

"

>

<XCircle/>

{error}

</div>

)}



</div>

</div>


</form>


</div>


);

}