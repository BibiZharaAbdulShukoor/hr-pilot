import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Briefcase,
  Calendar,
  Award,
  Users,
  Loader,
  Sparkles,
  AlertCircle,
} from "lucide-react";


import {
  getJobById,
} from "../api/dashboardApi";



export default function JobDetails(){


const { id } = useParams();

const navigate = useNavigate();


const [job,setJob] = useState(null);

const [loading,setLoading] = useState(true);

const [error,setError] = useState("");





useEffect(()=>{

loadJob();

},[]);





async function loadJob(){


try{


const res = await getJobById(id);


setJob(
res.data.data
);


}

catch(err){


console.log(err);


setError(
"Failed to load job"
);


}

finally{


setLoading(false);


}


}






function findCandidates(){


navigate(`/matching/${id}`);


}








if(loading){


return (

<div className="
h-96
flex
items-center
justify-center
">


<Loader
size={50}
className="
animate-spin
text-[#0CA0C7]
"
/>


</div>


);


}







if(!job){


return (

<div className="
bg-white
dark:bg-[#111827]
rounded-3xl
shadow-xl
p-10
text-center
">


<Briefcase
size={70}
className="
mx-auto
text-gray-300
mb-5
"
/>


<h2 className="
text-3xl
font-black
dark:text-white
">

Job Not Found

</h2>


</div>

);


}







return (

<div className="space-y-8">





{
error && (

<div className="
bg-red-100
dark:bg-red-500/10
text-red-600
dark:text-red-400
p-5
rounded-2xl
flex
items-center
gap-3
font-bold
">

<AlertCircle/>

{error}

</div>

)

}







{/* HEADER */}



<div

className="
relative
overflow-hidden
rounded-[2rem]
p-10
text-white
shadow-2xl


bg-gradient-to-r
from-[#0CA0C7]
to-[#61D7E5]


dark:from-[#111827]
dark:via-[#0f172a]
dark:to-[#020617]

"

>



<div className="
flex
items-center
gap-5
relative
">


<div className="
p-5
rounded-3xl
bg-white/20
backdrop-blur-xl
">

<Briefcase size={45}/>

</div>




<div>


<h1 className="
text-4xl
font-black
">

{job.title}

</h1>


<p className="
mt-2
opacity-90
">

AI Recruitment Matching System

</p>


</div>


</div>


</div>








{/* INFO CARDS */}



<div className="
grid
md:grid-cols-3
gap-6
">



<div className="
bg-gradient-to-br
from-white
to-cyan-50

dark:from-[#111827]
dark:via-[#0f172a]
dark:to-[#020617]

rounded-[2rem]
shadow-xl
border
border-slate-200
dark:border-slate-700
p-6
">


<Calendar
className="
text-[#0CA0C7]
dark:text-[#61D7E5]
"
/>


<p className="
mt-3
text-slate-500
dark:text-slate-300
">

Created

</p>


<h3 className="
text-xl
font-black
dark:text-white
">

{
new Date(job.created_at)
.toLocaleDateString()
}

</h3>


</div>







<div className="
bg-gradient-to-br
from-white
to-cyan-50

dark:from-[#111827]
dark:via-[#0f172a]
dark:to-[#020617]

rounded-[2rem]
shadow-xl
border
border-slate-200
dark:border-slate-700
p-6
">


<Award
className="
text-purple-600
dark:text-purple-400
"
/>



<p className="
mt-3
text-slate-500
dark:text-slate-300
">

Required Skills

</p>



<h3 className="
text-xl
font-black
dark:text-white
">

{
job.skills?.length || 0
}

</h3>


</div>







<div className="
bg-gradient-to-br
from-white
to-cyan-50

dark:from-[#111827]
dark:via-[#0f172a]
dark:to-[#020617]

rounded-[2rem]
shadow-xl
border
border-slate-200
dark:border-slate-700
p-6
">


<Users
className="
text-green-600
dark:text-green-400
"
/>


<p className="
mt-3
text-slate-500
dark:text-slate-300
">

AI Matching

</p>


<h3 className="
text-xl
font-black
dark:text-white
">

Ready

</h3>


</div>



</div>









{/* DESCRIPTION */}



<div className="
bg-gradient-to-br
from-white
to-cyan-50

dark:from-[#111827]
dark:via-[#0f172a]
dark:to-[#020617]

rounded-[2rem]

shadow-xl

border
border-slate-200
dark:border-slate-700

p-8
">


<h2 className="
text-2xl
font-black
dark:text-white
mb-4
">

Job Description

</h2>


<p className="
text-slate-600
dark:text-slate-300
leading-8
">

{job.description}

</p>





<div className="
flex
flex-wrap
gap-3
mt-6
">


{
Array.isArray(job.skills) &&

job.skills.map((skill,index)=>(


<span

key={index}

className="
px-4
py-2
rounded-full

bg-cyan-100

text-cyan-700


dark:bg-cyan-500/20

dark:text-cyan-300

font-bold
"

>

{skill}

</span>


))

}


</div>


</div>








{/* BUTTON */}



<div className="
flex
justify-center
">


<button

onClick={findCandidates}

className="
flex
items-center
gap-3

px-8
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


hover:scale-105

transition

"

>


<Sparkles/>


Find Best Candidates


</button>


</div>





</div>


);


}