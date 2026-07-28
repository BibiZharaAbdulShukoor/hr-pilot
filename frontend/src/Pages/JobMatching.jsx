import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Sparkles,
  Loader,
  User,
  Mail,
  CheckCircle,
  Briefcase,
  AlertCircle,
  Trophy,
} from "lucide-react";


import {
  getJobs,
  matchCandidates,
} from "../api/dashboardApi";



export default function JobMatching(){


const { id } = useParams();



const [jobs,setJobs] = useState([]);

const [selectedJob,setSelectedJob] = useState(id || "");

const [matches,setMatches] = useState([]);

const [loading,setLoading] = useState(false);

const [error,setError] = useState("");







useEffect(()=>{

loadJobs();

},[id]);






async function loadJobs(){


try{


const res = await getJobs();


const jobsData = res.data.data || [];


setJobs(jobsData);



if(id){

setSelectedJob(id);

}



}


catch(err){

console.log(err);

setError(
"Failed to load jobs"
);

}


}







async function runMatching(){


if(!selectedJob){

setError(
"Please select a job first"
);

return;

}



try{


setLoading(true);

setError("");



const res = await matchCandidates(selectedJob);



setMatches(

res.data.data ||

res.data.matches ||

[]

);



}


catch(err){

console.log(err);


setError(

err.response?.data?.message ||

"Matching failed"

);


}


finally{


setLoading(false);


}



}







return (

<div className="space-y-10">



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
"

>


<div

className="
absolute
w-96
h-96
rounded-full
bg-white/20
blur-3xl
right-[-100px]
top-[-100px]
"

/>



<div className="
relative
flex
items-center
gap-5
">


<div

className="
p-5
rounded-3xl
bg-white/20
backdrop-blur-xl
"

>

<Sparkles size={45}/>

</div>



<div>

<h1

className="
text-5xl
font-black
"

>

Job AI Matching

</h1>


<p

className="
mt-3
opacity-90
"

>

Find the best candidates for this job using AI.

</p>


</div>


</div>


</section>

{/* SELECT JOB */}


<div

className="

bg-gradient-to-br

from-white

via-cyan-50

to-white



dark:from-[#111827]

dark:via-[#0f172a]

dark:to-[#020617]



rounded-[2rem]


shadow-xl


border

border-white/50


dark:border-slate-700



p-8

"

>


<div

className="

flex

items-center

gap-3

mb-6

"

>


<Briefcase

className="

text-[#0CA0C7]

dark:text-[#61D7E5]

"

/>



<h2

className="

text-2xl

font-black

text-slate-800

dark:text-white

"

>

Select Job Position

</h2>



</div>







<div

className="

flex

flex-col

md:flex-row

gap-5

"

>



<select


value={selectedJob}


onChange={(e)=>{


setSelectedJob(e.target.value);


setMatches([]);

setError("");

}}



className="

flex-1

p-4

rounded-2xl



bg-white

dark:bg-gradient-to-br

dark:from-[#111827]

dark:via-[#0f172a]

dark:to-[#020617]



border

border-slate-200


dark:border-slate-700



text-slate-800


dark:text-white



outline-none

"

>


<option value="">

Choose Job

</option>




{

jobs.map((job)=>(


<option

key={job.id}

value={job.id}

>

{job.title}

</option>


))

}



</select>








<button


onClick={runMatching}


disabled={loading}


className="


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


shadow-lg



hover:scale-105



transition-all


duration-500



"

>


{

loading

?


<>

<Loader

className="
animate-spin

inline

mr-2

"

/>

Searching

</>


:

<>

<Sparkles

className="
inline

mr-2

"

/>


Find AI Match


</>

}


</button>




</div>


</div>









{
error &&


<div

className="


bg-red-100


dark:bg-red-500/10



text-red-600


dark:text-red-400



p-5



rounded-2xl



flex

gap-3

items-center



font-bold



border

border-red-200


dark:border-red-500/20


"

>


<AlertCircle/>


{error}


</div>


}

{/* MATCH RESULTS */}

<div
className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-6
"
>

{

matches.map((candidate,index)=>(


<div

key={candidate.id || index}

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

shadow-xl

border
border-white/50
dark:border-slate-700

p-6

hover:-translate-y-2

transition-all

duration-500

"

>


<div
className="
absolute
w-40
h-40
rounded-full
bg-cyan-300/20
dark:bg-cyan-500/10
blur-3xl
right-[-50px]
top-[-50px]
"
/>



<div className="relative z-10">


<div
className="
flex
justify-between
mb-6
"
>


<div
className="
flex
items-center
gap-2
font-black
text-[#0CA0C7]
dark:text-[#61D7E5]
"
>

<Trophy/>

Rank #{index+1}

</div>


</div>




<div
className="
flex
items-center
gap-4
"
>


<div
className="

p-4
rounded-3xl

bg-gradient-to-br
from-[#0CA0C7]
via-[#38BDF8]
to-[#61D7E5]

dark:from-[#0CA0C7]
dark:via-[#0891B2]
dark:to-[#164E63]

text-white
shadow-lg

"
>

<User size={32}/>

</div>




<div>


<h2
className="
text-xl
font-black
text-slate-800
dark:text-white
"
>

{candidate.name}

</h2>




<p
className="
flex
gap-2
items-center

text-slate-500
dark:text-slate-300

text-sm
"
>

<Mail size={15}/>

{candidate.email}

</p>



</div>


</div>






{/* SCORE */}

<div
className="
mt-6
p-5

rounded-2xl

bg-cyan-50

dark:bg-cyan-500/10

border

border-cyan-100

dark:border-cyan-500/20

"
>


<div
className="
flex
justify-between
font-black
"
>

<span
className="
text-slate-700
dark:text-white
"
>

AI Match Score

</span>



<span
className="
text-[#0CA0C7]
dark:text-[#61D7E5]
"
>

{candidate.score || 0}%

</span>


</div>



<div
className="
mt-3
h-3

bg-white
dark:bg-white/10

rounded-full
overflow-hidden
"
>


<div

className="
h-full
rounded-full

bg-gradient-to-r

from-[#0CA0C7]

to-[#61D7E5]

"

style={{
width:`${candidate.score || 0}%`
}}

/>


</div>



</div>






{/* AI RECOMMENDATION */}


<div

className="

mt-6

p-5

rounded-3xl


bg-slate-100


dark:bg-gradient-to-br

dark:from-[#111827]

dark:via-[#0f172a]

dark:to-[#020617]


border

border-slate-200

dark:border-slate-700

"

>


<div

className="

flex

gap-2

items-center

font-black

text-slate-800

dark:text-white

"

>


<CheckCircle
className="text-green-500"
/>


AI Recommendation


</div>




<p

className="

mt-3

text-slate-600

dark:text-slate-300

leading-7

"

>

{
candidate.explanation ||
"No explanation available"
}

</p>


</div>




</div>


</div>


))

}


</div>


</div>

);

}