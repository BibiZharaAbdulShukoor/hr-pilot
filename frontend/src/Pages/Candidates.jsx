import CandidateCard from "../components/CandidateCard";
import CandidateSearch from "../components/CandidateSearch";

import { useEffect, useMemo, useState } from "react";

import {
  Users,
  Mail,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

import {
  getCandidates,
  deleteCandidate,
} from "../api/dashboardApi";



export default function Candidates() {


  const [candidates,setCandidates] = useState([]);

  const [search,setSearch] = useState("");

  const [loading,setLoading] = useState(true);

  const [error,setError] = useState("");




  useEffect(()=>{

    loadCandidates();

  },[]);





  async function loadCandidates(){

    try{

      setLoading(true);

      setError("");

      const res = await getCandidates();

      const data = res.data?.data || [];

      setCandidates(
        Array.isArray(data)
        ?
        data
        :
        []
      );


    }catch(error){

      console.error(
        "Candidates Error:",
        error
      );

      setError(
        "Failed to load candidates"
      );


    }finally{

      setLoading(false);

    }

  }






  async function handleDelete(candidate){


    const confirmDelete =
    window.confirm(
      `Delete ${candidate.name}?`
    );


    if(!confirmDelete)
      return;




    try{


      await deleteCandidate(candidate.id);



      setCandidates(prev=>

        prev.filter(
          item=>item.id !== candidate.id
        )

      );



    }catch(error){

      console.error(
        "Delete Error:",
        error
      );


      alert(
        "Delete failed"
      );

    }


  }








  const filteredCandidates =
  useMemo(()=>{


    return candidates.filter(candidate=>{


      const text = `

      ${candidate.name || ""}

      ${candidate.email || ""}

      ${candidate.skills || ""}

      `.toLowerCase();



      return text.includes(
        search.toLowerCase()
      );


    });


  },[
    search,
    candidates
  ]);








return (

<div className="space-y-10">





{/* HERO */}


<div

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

right-[-120px]

top-[-120px]

rounded-full

bg-white/30

dark:bg-[#0CA0C7]/20

blur-3xl

"

/>




<div className="relative z-10">


<div className="flex items-center gap-3">


<div

className="

p-3

rounded-2xl

bg-white/20

backdrop-blur-xl

border

border-white/20

"

>

<Sparkles size={30}/>

</div>



<div>

<h1

className="

text-5xl

font-black

"

>

Candidate Management 🚀

</h1>


<p

className="

mt-3

text-lg

text-white/80

"

>

Manage AI analyzed candidates and recruitment profiles.

</p>


</div>


</div>


</div>


</div>








{/* ERROR */}


{
error &&

<div

className="

bg-red-500/20

text-red-600

dark:text-red-300

p-4

rounded-2xl

font-bold

border

border-red-400/30

"

>

{error}

</div>

}








{/* STAT CARDS */}


<div

className="

grid

md:grid-cols-3

gap-6

"

>



{

[

{
title:"Total Candidates",
value:candidates.length,
icon:<Users size={35}/>
},

{
title:"Active Profiles",
value:candidates.length,
icon:<BadgeCheck size={35}/>
},

{
title:"Email Records",
value:candidates.filter(
(c)=>c.email
).length,
icon:<Mail size={35}/>
}

].map((item,index)=>(



<div

key={index}

className="

relative

overflow-hidden

rounded-[2rem]

p-6

text-white



bg-gradient-to-br

from-[#0CA0C7]

via-[#38BDF8]

to-[#61D7E5]



dark:from-[#111827]

dark:via-[#0f172a]

dark:to-[#020617]



shadow-2xl



border

border-white/30

dark:border-slate-700



transition-all

duration-500



hover:scale-[1.03]

"

>





{/* Glow */}

<div

className="

absolute

w-40

h-40

right-[-50px]

top-[-50px]

rounded-full

bg-white/30

dark:bg-[#0CA0C7]/20

blur-3xl

"

/>







<div

className="

relative

z-10

"

>


<div

className="

w-14

h-14

rounded-2xl

flex

items-center

justify-center



bg-white/20



backdrop-blur-xl



border

border-white/20

"

>

{item.icon}

</div>





<p

className="

mt-5

text-white/80

font-medium

"

>

{item.title}

</p>





<h2

className="

text-4xl

font-black

mt-1

"

>

{item.value}

</h2>




</div>



</div>



))


}


</div>



<CandidateSearch value={search} onChange={setSearch} />


{/* CANDIDATE LIST */}


<div

className="

grid

lg:grid-cols-2

xl:grid-cols-3

gap-8

"

>



{

loading ?


[...Array(6)].map((_,index)=>(


<div

key={index}

className="

h-96

rounded-3xl

bg-gray-200

dark:bg-white/10

animate-pulse

"

/>


))


:


filteredCandidates.length===0 ?


<div

className="

col-span-full

text-center

py-20

"

>


<Users

size={70}

className="

mx-auto

text-gray-300

mb-5

"

/>



<h2

className="

text-2xl

font-black

text-gray-500

dark:text-gray-300

"

>

No Candidates Found

</h2>



</div>



:


filteredCandidates.map(candidate=>(


<CandidateCard

key={candidate.id}

candidate={candidate}

onDelete={handleDelete}

/>


))


}



</div>





</div>


);


}