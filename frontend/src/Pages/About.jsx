import { Brain, Users, Sparkles, Target } from "lucide-react";


export default function About() {


  return (


    <div

      className="

      min-h-screen

      p-8


     relative

        overflow-hidden



        dark:bg-gradient-to-br

        dark:from-[#111827]

        dark:via-[#0f172a]

        dark:to-[#020617]


      "

    >





      {/* HERO */}


      <section


        className="

        relative

        overflow-hidden



        bg-gradient-to-br

        from-[#0CA0C7]

        via-[#38BDF8]

        to-[#61D7E5]



        dark:bg-gradient-to-br

        dark:from-[#111827]

        dark:via-[#0f172a]

        dark:to-[#020617]



        rounded-[2rem]



        p-10



        text-white



        shadow-2xl



        border

        border-white/30

        dark:border-slate-700



        "

      >





        {/* GLOW */}


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

            <Brain size={45}/>


          </div>





          <div>


            <h1

              className="

              text-5xl

              font-black

              "

            >

              About HR Pilot AI 🚀

            </h1>




            <p

              className="

              mt-3

              text-lg

              text-white/90

              "

            >

              AI-powered recruitment platform

            </p>


          </div>



        </div>


      </section>









      {/* FEATURES */}


      <div

        className="

        grid

        md:grid-cols-3

        gap-6

        mt-10

        "

      >






        <FeatureCard

          icon={<Users size={35}/>}

          title="Smart Hiring"

          text="HR Pilot helps companies find the best candidates faster using AI matching technology."

        />





        <FeatureCard

          icon={<Sparkles size={35}/>}

          title="AI Matching"

          text="The system analyzes skills and experience to recommend suitable candidates."

        />





        <FeatureCard

          icon={<Target size={35}/>}

          title="Better Decisions"

          text="HR teams can make faster and smarter recruitment decisions."

        />





      </div>





    </div>


  );

}







function FeatureCard({

  icon,

  title,

  text

}) {


  return (



    <div


      className="

      relative

      overflow-hidden



      bg-gradient-to-br

      from-white

      via-cyan-50

      to-white



      dark:bg-gradient-to-br

      dark:from-[#111827]

      dark:via-[#0f172a]

      dark:to-[#020617]



      rounded-[2rem]



      p-8



      shadow-xl



      border

      border-white/60

      dark:border-slate-700



      transition-all

      duration-700



      hover:-translate-y-2

      "

    >




      {/* GLOW */}


      <div

        className="

        absolute

        w-32

        h-32

        right-[-40px]

        top-[-40px]



        rounded-full



        bg-[#61D7E5]/30



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



          flex

          items-center

          justify-center



          rounded-2xl



          bg-[#0CA0C7]/10



          dark:bg-white/10



          text-[#0CA0C7]



          dark:text-[#61D7E5]



          border

          border-white/20

          "

        >

          {icon}


        </div>







        <h2

          className="

          text-2xl

          font-black

          mt-5



          text-slate-800



          dark:text-white

          "

        >

          {title}

        </h2>







        <p

          className="

          mt-3



          text-slate-600



          dark:text-white/70

          "

        >

          {text}

        </p>





      </div>




    </div>


  );

}