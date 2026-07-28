import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  User,
  Mail,
  Lock,
  ArrowLeft,
  UserPlus,
  Brain,
} from "lucide-react";

import { registerUser } from "../api/auth";


export default function Register() {


  const navigate = useNavigate();



  const [formData,setFormData] = useState({

    name:"",
    email:"",
    password:"",

  });



  const [error,setError] = useState("");

  const [loading,setLoading] = useState(false);






  const handleChange = (e)=>{


    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });


  };







  const handleSubmit = async(e)=>{


    e.preventDefault();


    setLoading(true);

    setError("");



    try{


      await registerUser(formData);



      navigate("/login");



    }catch(err){



      setError(

        err.response?.data?.message ||

        "Registration failed"

      );



    }finally{


      setLoading(false);


    }


  };








return (


<div


className="


min-h-screen


flex


items-center


justify-center



relative


overflow-hidden





bg-gradient-to-br

from-[#e6fbff]

via-white

to-[#61D7E5]/30





dark:from-[#020617]

dark:via-[#0f172a]

dark:to-[#020617]



px-4


"

>






{/* BACKGROUND */}



<div

className="

absolute

-top-40

-left-40


w-[400px]

h-[400px]


rounded-full


bg-[#61D7E5]/30


blur-[120px]

"

/>




<div

className="

absolute

-bottom-40

-right-40


w-[400px]

h-[400px]


rounded-full


bg-[#0CA0C7]/30


blur-[120px]

"

/>








{/* BACK BUTTON */}



<button


onClick={()=>navigate("/")}


className="


absolute

top-8

left-8



flex

items-center

gap-2



px-5

py-3



rounded-xl



bg-white/70


dark:bg-white/10



border

border-[#61D7E5]/30



text-[#0CA0C7]



font-semibold



backdrop-blur-xl



hover:scale-105



transition


"


>


<ArrowLeft size={18}/>


Back Home


</button>













<div



className="



w-full

max-w-md



bg-white/80


dark:bg-white/10



backdrop-blur-xl



border

border-[#61D7E5]/30



rounded-[2rem]



shadow-2xl



p-10



"


>







{/* LOGO */}



<div

className="

flex

justify-center

mb-5

"

>


<div


className="


w-16

h-16


rounded-2xl



bg-gradient-to-br

from-[#0CA0C7]

to-[#61D7E5]



flex

items-center

justify-center



shadow-lg



"

>


<Brain

size={35}

className="text-white"

/>


</div>


</div>








<h1


className="


text-3xl


font-black


text-center



text-slate-800


dark:text-white



"


>

Create Account

</h1>







<p


className="

text-center


mt-2


mb-8


text-slate-500


dark:text-white/60


"

>

Join HR Pilot AI Recruitment Platform

</p>









{error && (


<div


className="


bg-red-100


text-red-600


rounded-xl


p-3


mb-5


text-sm


"


>


{error}


</div>


)}









<form


onSubmit={handleSubmit}


className="space-y-5"


>








{/* NAME */}



<div className="relative">


<User

className="

absolute

left-4

top-4

text-gray-400

"

size={20}

/>



<input


type="text"


name="name"


placeholder="Full Name"



value={formData.name}



onChange={handleChange}



className="


w-full


rounded-xl



p-4


pl-12



border



border-gray-200



dark:border-white/20



dark:bg-white/10



outline-none



focus:ring-2



focus:ring-[#0CA0C7]


"


required


/>


</div>









{/* EMAIL */}



<div className="relative">


<Mail

className="

absolute

left-4

top-4

text-gray-400

"

size={20}

/>



<input


type="email"


name="email"



placeholder="Email Address"



value={formData.email}



onChange={handleChange}



className="


w-full


rounded-xl



p-4


pl-12



border



border-gray-200



dark:border-white/20



dark:bg-white/10



outline-none



focus:ring-2



focus:ring-[#0CA0C7]


"


required


/>



</div>









{/* PASSWORD */}



<div className="relative">



<Lock


className="

absolute

left-4

top-4

text-gray-400

"


size={20}


/>



<input



type="password"



name="password"



placeholder="Password"



value={formData.password}



onChange={handleChange}



className="


w-full


rounded-xl



p-4


pl-12



border



border-gray-200



dark:border-white/20



dark:bg-white/10



outline-none



focus:ring-2



focus:ring-[#0CA0C7]


"


required



/>



</div>









<button



disabled={loading}



className="


w-full



bg-gradient-to-r


from-[#0CA0C7]


to-[#61D7E5]



text-white



rounded-xl



py-4



font-bold



flex



justify-center



items-center



gap-2



shadow-lg



hover:scale-105



transition



disabled:opacity-50



"


>


<UserPlus size={20}/>



{

loading

?

"Creating Account..."

:

"Register"

}



</button>








</form>








<p


className="


text-center


mt-6



text-slate-600


dark:text-white/70



"

>


Already have an account?



<Link


to="/login"



className="


ml-2


font-bold


text-[#0CA0C7]


"


>


Login


</Link>



</p>







</div>





</div>


);


}