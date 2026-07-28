import { useEffect, useState } from "react";

import {
  Sparkles,
  Loader,
  Trophy,
  Briefcase,
  Users,
  AlertCircle,
  BrainCircuit,
} from "lucide-react";

import {
  getJobs,
  matchCandidates,
} from "../api/dashboardApi";

import MatchCard from "../components/MatchCard";



export default function AIMatching() {


const [jobs,setJobs] = useState([]);

const [selectedJob,setSelectedJob] = useState("");

const [matches,setMatches] = useState([]);

const [loading,setLoading] = useState(false);

const [jobsLoading,setJobsLoading] = useState(true);

const [error,setError] = useState("");





useEffect(()=>{

loadJobs();

},[]);






async function loadJobs(){

try{

setJobsLoading(true);


const res = await getJobs();


setJobs(
res.data.data || []
);


}

catch(err){

console.log(err);

setError(
"Failed to load jobs"
);

}


finally{

setJobsLoading(false);

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

setMatches([]);



const res = await matchCandidates(
selectedJob
);



console.log(
"AI MATCH RESULT:",
res.data
);



setMatches(
res.data.data || []
);



}

catch(err){

console.log(err);

setError(
"AI Matching failed"
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

border-white/20

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

backdrop-blur-xl

"

>

<BrainCircuit size={45}/>

</div>




<div>


<h1

className="

text-5xl

font-black

"

>

AI Matching Center 🚀

</h1>



<p

className="

mt-3

text-white/90

"

>

Find the best candidates using AI semantic similarity.

</p>


</div>


</div>


</section>
{/* ERROR */}

{
error && (

<div

className="

bg-red-100

dark:bg-red-500/10

text-red-600

dark:text-red-400

rounded-2xl

p-5

flex

items-center

gap-3

font-bold

border

border-red-200

dark:border-red-500/20

"

>

<AlertCircle/>

{error}

</div>

)

}






{/* SELECT JOB */}


<div

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

border-white/50

dark:border-white/10

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

className="text-[#0CA0C7]"

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


setSelectedJob(
e.target.value
);


setMatches([]);


}}




className="

flex-1

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


<option value="">


{
jobsLoading

?

"Loading jobs..."

:

"Choose Job"

}


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



  dark:border

  dark:border-slate-700



  text-white


  font-black


  flex

  justify-center

  items-center


  gap-3



  shadow-lg



  transition-all

  duration-500



  hover:scale-105



  disabled:opacity-50

  "
>



{

loading

?

<>

<Loader

className="animate-spin"

/>

Matching...

</>


:

<>

<Sparkles/>

Run AI Match

</>

}



</button>




</div>


</div>

{/* RESULTS */}

{
matches.length > 0 && (

<div>


<div

className="

flex

items-center

gap-3

mb-6

"

>

<Trophy

className="text-yellow-500"

/>


<h2

className="

text-3xl

font-black

text-slate-800

dark:text-white

"

>

Top AI Candidates

</h2>


</div>





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


<MatchCard

key={candidate.id}

candidate={candidate}

rank={index+1}

/>


))


}


</div>



</div>

)

}









{/* EMPTY STATE */}



{

!loading &&

selectedJob &&

matches.length === 0 &&

(


<div

className="

bg-gradient-to-br

from-white

to-cyan-50



dark:from-[#111827]

dark:to-[#020617]



rounded-[2rem]

shadow-xl

border

border-white/50

dark:border-white/10



p-12

text-center

"

>


<Users

size={70}

className="

mx-auto

text-slate-300

dark:text-slate-600

mb-5

"

/>



<h2

className="

text-3xl

font-black

text-slate-600

dark:text-white

"

>

No Candidates Matched

</h2>




<p

className="

mt-3

text-slate-400

"

>

Try another job position or upload more candidates.

</p>



</div>


)


}





</div>


);

}