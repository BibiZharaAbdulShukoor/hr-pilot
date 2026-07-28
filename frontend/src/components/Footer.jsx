import {
  Brain,
  Mail,
  ShieldCheck,
} from "lucide-react";


export default function Footer() {


  return (

    <footer
      className="

      bg-gradient-to-br

      from-white

      to-[#e6fbff]


      dark:from-[#111827]

      dark:via-[#0f172a]

      dark:to-[#020617]


      border-t

      border-slate-200

      dark:border-slate-700


      mt-10

      px-8

      py-8


      shadow-xl


      transition-all

      duration-700

      "
    >


      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-3
        gap-8
        items-center
        "
      >




        {/* BRAND */}


        <div
          className="
          flex
          items-center
          gap-3
          "
        >


          <div
            className="

            w-12

            h-12


            rounded-2xl


            bg-gradient-to-br

            from-[#0CA0C7]

            to-[#61D7E5]


            dark:from-white/10

            dark:to-white/10


            text-white


            flex

            items-center

            justify-center


            shadow-lg


            border

            border-white/20

            dark:border-white/10

            backdrop-blur-xl

            "
          >

            <Brain size={26}/>

          </div>




          <div>


            <h2
              className="
              text-xl
              font-bold

              text-slate-800

              dark:text-white
              "
            >
              HR Pilot AI
            </h2>


            <p
              className="
              text-sm

              text-slate-500

              dark:text-white/60
              "
            >
              Smart AI Recruitment Platform
            </p>


          </div>



        </div>







        {/* LINKS */}


        <div>


          <h3
            className="
            font-bold

            text-slate-700

            dark:text-white

            mb-3
            "
          >
            Platform
          </h3>



          <div
            className="
            space-y-2

            text-sm

            text-slate-500

            dark:text-white/60
            "
          >

            <p>
              AI Candidate Matching
            </p>

            <p>
              Resume Analysis
            </p>

            <p>
              Smart Hiring
            </p>


          </div>


        </div>







        {/* CONTACT */}


        <div>


          <h3
            className="
            font-bold

            text-slate-700

            dark:text-white

            mb-3
            "
          >
            Contact
          </h3>



          <div
            className="
            space-y-3

            text-sm

            text-slate-500

            dark:text-white/60
            "
          >


            <div
              className="
              flex
              items-center
              gap-2
              "
            >

              <Mail
                size={18}

                className="
                text-[#0CA0C7]

                dark:text-[#61D7E5]
                "
              />

              support@hrpilot.ai

            </div>




            <div
              className="
              flex
              items-center
              gap-2
              "
            >

              <ShieldCheck
                size={18}

                className="
                text-[#0CA0C7]

                dark:text-[#61D7E5]
                "
              />

              Secure AI Recruitment

            </div>



          </div>



        </div>



      </div>






      <div
        className="
        mt-8

        pt-5

        border-t

        border-slate-200

        dark:border-slate-700

        text-center

        text-sm

        text-slate-500

        dark:text-white/60
        "
      >

        ©️ {new Date().getFullYear()} HR Pilot AI. All rights reserved.

      </div>



    </footer>

  );

}