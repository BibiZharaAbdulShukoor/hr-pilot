import {
  Bell,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";


export default function Notifications(){



const notifications = [

{
id:1,
title:"New Candidate Uploaded",
message:
"A new candidate CV has been added to the recruitment system.",
time:"2 minutes ago",
type:"success"
},


{
id:2,
title:"AI Matching Completed",
message:
"AI has finished finding the best candidates for your job.",
time:"10 minutes ago",
type:"ai"
},


{
id:3,
title:"Job Application Received",
message:
"A candidate applied for Frontend Developer position.",
time:"1 hour ago",
type:"info"
},


];





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

"

>


<div

className="

absolute

w-80

h-80

rounded-full

bg-white/20

dark:bg-[#0CA0C7]/20

blur-3xl

right-[-100px]

top-[-100px]

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

border

border-white/20

"

>

<Bell size={45}/>

</div>





<div>

<h1

className="

text-5xl

font-black

"

>

Notifications

</h1>


<p

className="

mt-3

text-white/90

"

>

Stay updated with your AI recruitment activities.

</p>


</div>


</div>


</section>









{/* NOTIFICATION LIST */}



<div

className="

grid

gap-6

"

>


{

notifications.map((item)=>(



<div

key={item.id}

className="

relative

overflow-hidden



rounded-[2rem]

p-6



bg-gradient-to-br

from-white

via-cyan-50

to-white



dark:from-[#111827]

dark:via-[#0f172a]

dark:to-[#020617]



border

border-white/50

dark:border-slate-700



shadow-xl



transition-all

duration-500



hover:-translate-y-1

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





<div

className="

relative

flex

items-start

gap-5

"

>


<div

className="

p-4

rounded-2xl



bg-gradient-to-br

from-[#0CA0C7]

to-[#61D7E5]



text-white

shadow-lg

"

>

{


item.type==="success"

?

<CheckCircle size={28}/>


:

item.type==="ai"

?

<Sparkles size={28}/>


:

<Bell size={28}/>


}



</div>







<div className="flex-1">


<h2

className="

text-xl

font-black

text-slate-800

dark:text-white

"

>

{item.title}

</h2>



<p

className="

mt-2

leading-7

text-slate-600

dark:text-slate-300

"

>

{item.message}

</p>




<div

className="

mt-4

flex

items-center

gap-2

text-sm

text-slate-400

"

>

<Clock size={15}/>

{item.time}

</div>



</div>



</div>





</div>



))

}



</div>





</div>


);


}