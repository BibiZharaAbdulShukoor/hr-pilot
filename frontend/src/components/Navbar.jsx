import { useState } from "react";

import {
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";


import {
  Brain,
  Bell,
  ChevronDown,
  Info,
  Mail,
  Moon,
  Sun,
  LogOut,
} from "lucide-react";


import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";



function Navbar() {


  const { darkMode, toggleTheme } = useTheme();


  const { user, logout } = useAuth();


  const navigate = useNavigate();


  const location = useLocation();



  const [showProfile, setShowProfile] = useState(false);





  const isLanding = location.pathname === "/";


  const showNotification = user && !isLanding;






  function handleLogout() {


    logout();


    navigate("/login");


  }







 const getUserInitials = () => {


  if (!user?.name) {

    return "HR";

  }



  const words = user.name

    .trim()

    .split(" ")

    .filter(Boolean);




  if (words.length === 1) {


    return words[0][0].toUpperCase();


  }




  return (

    words[0][0] +

    words[words.length - 1][0]

  ).toUpperCase();



};






  const navItems = isLanding

    ? [

        {
          name: "About",
          path: "/about",
          icon: Info,
        },


        {
          name: "Contact",
          path: "/contact",
          icon: Mail,
        },

      ]

    : [];







  return (


    <header


      className="

      fixed

      top-0

      left-0

      right-0

      z-50


      h-20


      bg-gradient-to-br

      from-white

      to-[#e6fbff]


      dark:from-[#111827]

      dark:via-[#0f172a]

      dark:to-[#020617]



      backdrop-blur-xl



      border-b


      border-slate-200

      dark:border-slate-700



      shadow-xl



      flex


      items-center


      justify-between



      px-8



      transition-all


      duration-700


      "

    >





      {/* LOGO */}


      <div className="flex items-center gap-3">


        <img

          src="https://cdn.vectorstock.com/i/500p/53/18/ai-banner-concept-in-the-digital-style-generative-vector-51365318.jpg"

          alt="AI Logo"


          className="

          w-12

          h-12

          rounded-2xl

          object-cover

          shadow-lg

          "

        />





        <div>


          <h1

            className="

            text-2xl

            font-bold


            text-slate-800


            dark:text-white


            "

          >

            HR Pilot

          </h1>





          <p

            className="

            text-xs


            text-slate-500


            dark:text-white/60


            "

          >

            AI Recruitment Platform

          </p>


        </div>


      </div>
      {/* NAVIGATION */}


      <nav

        className="

        flex

        items-center

        gap-8

        "

      >



        {navItems.map((item)=>{


          const Icon = item.icon;



          return (


            <NavLink


              key={item.path}


              to={item.path}


              className={({isActive}) =>


                `

                flex

                items-center

                gap-2


                text-sm


                font-medium



                transition-all


                duration-300



                ${

                  isActive

                  ?

                  "text-[#0CA0C7]"

                  :

                  "text-slate-600 dark:text-white/70 hover:text-[#0CA0C7]"

                }


                `


              }


            >



              <Icon size={18}/>



              {item.name}



            </NavLink>


          );


        })}



      </nav>









      {/* RIGHT SIDE */}





      <div


        className="

        flex

        items-center

        gap-5

        "

      >





        {/* AI ACCURACY */}





        <div


          className="

          flex

          items-center

          gap-2


          px-4

          py-2



          rounded-xl



          bg-white/60


          dark:bg-white/10



          border


          border-[#61D7E5]/30



          backdrop-blur-xl

          "

        >



          <Brain


            size={20}


            className="text-[#0CA0C7] dark:text-[#61D7E5]"


          />





          <div>



            <p


              className="

              text-xs

              text-slate-500


              dark:text-white/60

              "

            >

              AI Accuracy

            </p>





            <p


              className="

              text-sm

              font-bold


              text-[#0CA0C7]

              dark:text-[#61D7E5]

              "

            >

              94%

            </p>



          </div>



        </div>









        {/* THEME BUTTON */}





        <button


          onClick={toggleTheme}


          className="

          p-2


          rounded-xl



          bg-white/60


          dark:bg-white/10



          border

          border-[#61D7E5]/30



          text-[#0CA0C7]

          dark:text-[#61D7E5]



          hover:scale-110



          transition

          duration-300

          "

        >


          {darkMode ? (

            <Sun size={20}/>

          ) : (

            <Moon size={20}/>

          )}


        </button>

        {/* NOTIFICATION */}


        {showNotification && (

          <button


            onClick={() => navigate("/notifications")}


            className="

            relative

            p-2


            rounded-xl



            bg-gradient-to-br

            from-white

            to-cyan-50



            dark:from-[#111827]

            dark:via-[#0f172a]

            dark:to-[#020617]



            border

            border-[#61D7E5]/30



            text-[#0CA0C7]

            dark:text-[#61D7E5]



            shadow-lg



            hover:scale-110


            transition-all

            duration-300

            "

          >



            <Bell size={22}/>




            <span


              className="

              absolute

              top-0

              right-0


              w-2

              h-2


              bg-red-400


              rounded-full


              "

            />


          </button>


        )}









        {/* PROFILE */}





        {!isLanding && (


          <div


            className="

            relative

            flex

            items-center

            gap-2

            "

          >




            <button


              onClick={() => setShowProfile(!showProfile)}


              className="

              flex

              items-center

              gap-2

              "

            >




              <div


                className="

                w-11

                h-11


                rounded-full



                bg-gradient-to-br


                from-[#0CA0C7]


                to-[#61D7E5]



                dark:from-[#111827]

                dark:to-[#0f172a]



                dark:border

                dark:border-white/10



                text-white



                flex



                items-center



                justify-center



                font-bold



                shadow-lg

                "

              >


                {getUserInitials()}


              </div>





              <ChevronDown


                size={18}


                className="

                text-slate-600


                dark:text-white/70

                "

              />


            </button>

            {/* PROFILE MENU */}



            {showProfile && (


              <div


                className="

                absolute

                right-0

                top-14

                w-64

                bg-white

                dark:bg-slate-900

                rounded-2xl

                shadow-xl

                border

                border-gray-200

                dark:border-slate-700

                p-4

                z-50

                "

              >



                <p

                  className="

                  font-bold

                  text-slate-800

                  dark:text-white

                  "

                >

                  {user?.name || "User"}

                </p>





                <p

                  className="

                  text-sm

                  text-gray-500

                  dark:text-gray-400

                  mb-4

                  "

                >

                  {user?.email}

                </p>






                <button


                  onClick={handleLogout}


                  className="

                  w-full

                  flex

                  items-center

                  justify-center

                  gap-2

                  bg-red-500

                  hover:bg-red-600

                  text-white

                  py-2

                  rounded-xl

                  font-bold

                  transition

                  "

                >


                  <LogOut size={18}/>


                  Logout


                </button>





              </div>


            )}



          </div>


        )}



      </div>




    </header>


  );


}


export default Navbar;