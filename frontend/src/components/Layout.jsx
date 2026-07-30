import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";



function Layout() {


  return (


    <div
      className="
      min-h-screen
      relative
      overflow-hidden

      bg-gradient-to-br
      from-[#61D7E5]/20
      via-white
      to-[#0CA0C7]/20

      dark:from-[#020617]
      dark:via-[#0f172a]
      dark:to-[#111827]

      transition-all
      duration-700
      "
    >



      {/* AI BACKGROUND LIGHTS */}


      <div
        className="
        absolute
        -top-40
        -left-40

        w-[450px]
        h-[450px]

        rounded-full

        bg-[#61D7E5]/30

        dark:bg-[#61D7E5]/20

        blur-[120px]

        animate-float

        pointer-events-none
        "
      />



      <div
        className="
        absolute
        -bottom-40
        -right-40

        w-[500px]
        h-[500px]

        rounded-full

        bg-[#0CA0C7]/30

        dark:bg-[#0CA0C7]/20

        blur-[120px]

        animate-float

        pointer-events-none
        "
      />





      {/* NAVBAR */}


      <div
        className="
        relative
        z-20
        "
      >

        <Navbar />

      </div>





      {/* MAIN AREA */}


      <div
        className="
        relative
        z-10
        flex

        pt-20
        "
      >



        {/* SIDEBAR */}

        <Sidebar />

        {/* CONTENT */}


        <main
  className="
  flex-1
  min-h-screen

  ml-72

  p-8

  text-slate-800

  dark:text-slate-100

  transition-all

  duration-500
  "
>



          <div
            className="
            animate-fadeIn
            "
          >


            <Outlet />


          </div>



        </main>



      </div>






      {/* FOOTER */}


      <div
        className="
        relative
        ml-72
        "
      >

        <Footer />

      </div>




    </div>


  );


}


export default Layout;