import {
  Brain,
  Users,
  Sparkles,
  ShieldCheck,
  FileSearch,
  Target,
  UploadCloud,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";



export default function Landing() {


  const features = [

    {
      icon: <Brain size={35}/>,
      title: "AI Recruitment",
      text:
      "Advanced artificial intelligence helps recruiters discover the right talent faster."
    },


    {
      icon: <Users size={35}/>,
      title: "Smart Candidate Matching",
      text:
      "Match candidates with jobs using skills, experience and semantic similarity."
    },


    {
      icon: <FileSearch size={35}/>,
      title: "CV Intelligence",
      text:
      "Automatically analyze resumes and extract important candidate information."
    },


    {
      icon: <Target size={35}/>,
      title: "Better Decisions",
      text:
      "Make accurate hiring decisions with AI-powered recruitment insights."
    },

  ];





  const stats = [

    {
      number:"10K+",
      title:"Candidate Profiles"
    },


    {
      number:"95%",
      title:"Matching Accuracy"
    },


    {
      number:"60%",
      title:"Faster Hiring"
    },


  ];





  return (


<div

className="

min-h-screen


bg-gradient-to-br

from-white

via-[#e6fbff]

to-white



dark:from-[#020617]

dark:via-[#0f172a]

dark:to-[#020617]


transition-all

duration-700

"

>


{/* NAVBAR */}

<Navbar />





{/* HERO */}



<section

className="

max-w-7xl

mx-auto

px-8

pt-36

pb-20


grid

lg:grid-cols-2

gap-16

items-center

"

>



<div>


<div

className="

inline-flex

items-center

gap-2

px-5

py-2

rounded-full

bg-[#61D7E5]/20

border

border-[#61D7E5]/40

text-[#0CA0C7]

font-semibold

"

>


<Sparkles size={18}/>


AI Powered Recruitment Platform


</div>





<h1

className="

mt-6

text-5xl

lg:text-6xl

font-black

leading-tight

text-slate-800

dark:text-white

"

>


Hire Smarter


<br/>


With


<span

className="

text-[#0CA0C7]

"

>

HR Pilot AI

</span>


</h1>





<p

className="

mt-6

text-lg

leading-8

text-slate-600

dark:text-white/70

"

>


HR Pilot uses artificial intelligence to analyze CVs,
match candidates and help companies build powerful teams
with faster and smarter hiring decisions.


</p>





<div

className="

mt-8

flex

flex-wrap

gap-4

"

>


<Link

to="/register"

className="

px-8

py-4

rounded-2xl

bg-gradient-to-r

from-[#0CA0C7]

to-[#61D7E5]

text-white

font-bold

shadow-xl

hover:scale-105

transition

"

>

Get Started

</Link>




<Link

to="/login"

className="

px-8

py-4

rounded-2xl

border

border-[#0CA0C7]

text-[#0CA0C7]

font-bold

hover:bg-[#61D7E5]/20

transition

"

>

Login

</Link>



</div>



</div>
{/* AI IMAGE */}



<div

className="

relative

flex

justify-center

"

>



<div

className="

absolute

w-96

h-96

bg-[#61D7E5]/30

blur-[120px]

rounded-full

"

>

</div>






<div

className="

relative

bg-white/60

dark:bg-white/10

backdrop-blur-xl

border

border-[#61D7E5]/30

rounded-[3rem]

p-8

shadow-2xl

"

>



<img


src="https://cdn.vectorstock.com/i/500p/53/18/ai-banner-concept-in-the-digital-style-generative-vector-51365318.jpg"


alt="AI Recruitment"


className="

rounded-[2rem]

w-full

h-96

object-cover

"

/>



</div>


</div>




</section>









{/* STATS */}



<section

className="

max-w-6xl

mx-auto

px-8

grid

md:grid-cols-3

gap-6

"

>


{

stats.map((item,index)=>(


<div

key={index}

className="

bg-white

dark:bg-white/10

rounded-3xl

p-8

text-center

shadow-lg

border

border-[#61D7E5]/20

"

>


<h2

className="

text-4xl

font-black

text-[#0CA0C7]

"

>

{item.number}

</h2>



<p

className="

mt-2

text-slate-600

dark:text-white/70

font-semibold

"

>

{item.title}

</p>


</div>


))

}


</section>









{/* FEATURES */}



<section

className="

max-w-7xl

mx-auto

px-8

py-20

"

>


<h2

className="

text-4xl

font-black

text-center

text-slate-800

dark:text-white

"

>

Powerful AI Features

</h2>



<div

className="

grid

md:grid-cols-4

gap-6

mt-12

"

>


{

features.map((item,index)=>(


<div

key={index}

className="

bg-white

dark:bg-white/10

backdrop-blur-xl

rounded-3xl

p-7

shadow-lg

border

border-[#61D7E5]/20

hover:-translate-y-2

transition

"

>


<div

className="

text-[#0CA0C7]

"

>

{item.icon}

</div>



<h3

className="

mt-5

font-bold

text-xl

text-slate-800

dark:text-white

"

>

{item.title}

</h3>



<p

className="

mt-3

text-sm

text-slate-600

dark:text-white/70

leading-6

"

>

{item.text}

</p>


</div>


))

}


</div>


</section>

{/* HOW IT WORKS */}



<section

className="

py-20

bg-white

dark:bg-black/20

"

>


<h2

className="

text-4xl

font-black

text-center

text-slate-800

dark:text-white

"

>

How HR Pilot Works

</h2>





<div

className="

max-w-5xl

mx-auto

mt-12

grid

md:grid-cols-3

gap-8

px-8

"

>



{

[

{
icon:<UploadCloud/>,
title:"Upload CV"
},

{
icon:<Brain/>,
title:"AI Analysis"
},

{
icon:<Zap/>,
title:"Best Match"
}


].map((step,index)=>(


<div

key={index}

className="

text-center

"

>


<div

className="

mx-auto

w-20

h-20

rounded-full

bg-gradient-to-r

from-[#0CA0C7]

to-[#61D7E5]

text-white

flex

items-center

justify-center

"

>

{step.icon}

</div>



<h3

className="

mt-5

font-bold

text-xl

dark:text-white

"

>

{step.title}

</h3>



</div>


))


}



</div>


</section>









{/* CTA */}



<section

className="

max-w-6xl

mx-auto

my-20

mx-8

rounded-[3rem]

bg-gradient-to-r

from-[#0CA0C7]

to-[#61D7E5]

p-12

text-center

text-white

shadow-2xl

"

>



<ShieldCheck

size={45}

className="mx-auto"

/>



<h2

className="

mt-5

text-4xl

font-black

"

>

Ready To Transform Hiring?

</h2>



<p

className="

mt-4

text-white/90

"

>

Start building smarter teams with AI recruitment technology.

</p>




<Link

to="/register"

className="

inline-block

mt-8

bg-white

text-[#0CA0C7]

px-8

py-4

rounded-2xl

font-bold

"

>

Create Account

</Link>



</section>

    </div>


  );

}