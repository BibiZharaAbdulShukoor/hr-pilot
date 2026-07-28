import { Sparkles, Brain, Trophy, Target } from "lucide-react";


export default function InsightCard({ data = {} }) {


  const {
    topCandidates = [],
    aiAccuracy = 0,
    hiringRate = 0,
  } = data;



  const bestCandidate =
    topCandidates.length > 0
      ? topCandidates[0]
      : null;



  return (

    <div

      className="

      relative

      overflow-hidden



      bg-gradient-to-br

      from-[#0CA0C7]

      via-[#38BDF8]

      to-[#61D7E5]



      dark:from-[#111827]

      dark:via-[#0f172a]

      dark:to-[#020617]



      rounded-3xl



      shadow-2xl



      p-8



      text-white



      border

      border-white/30

      dark:border-slate-700



      transition-all

      duration-700

      "

    >




      {/* MOVING LIGHT */}


      <div

        className="

        absolute

        w-72

        h-72

        rounded-full



        bg-white/30



        dark:bg-[#0CA0C7]/20



        blur-3xl



        -right-20

        -top-20



        animate-float

        "

      />




      <div

        className="

        absolute

        w-60

        h-60

        rounded-full



        bg-[#61D7E5]/40



        dark:bg-[#61D7E5]/10



        blur-3xl



        -left-20

        -bottom-20



        animate-float

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

          flex

          items-center

          gap-3

          mb-6

          "

        >


          <div

            className="

            bg-white/20

            dark:bg-white/10

            backdrop-blur-xl

            p-3

            rounded-2xl

            border

            border-white/20

            "

          >

            <Sparkles size={30}/>

          </div>





          <h2

            className="

            text-2xl

            font-black

            "

          >

            AI Insight

          </h2>



        </div>







        <p

          className="

          text-white/90

          leading-7

          "

        >

          AI engine analyzed your recruitment data and generated intelligent
          hiring insights.


        </p>








        <div

          className="

          mt-6

          space-y-4

          "

        >




          <div

            className="

            bg-white/20

            dark:bg-white/10

            backdrop-blur-xl

            rounded-2xl

            p-4

            flex

            items-center

            gap-4



            border

            border-white/20

            "

          >


            <Brain />



            <div>

              <p

                className="

                text-sm

                text-white/80

                "

              >

                AI Accuracy

              </p>



              <h3

                className="

                text-2xl

                font-black

                "

              >

                {aiAccuracy}%


              </h3>


            </div>



          </div>









          <div

            className="

            bg-white/20

            dark:bg-white/10

            backdrop-blur-xl

            rounded-2xl

            p-4

            flex

            items-center

            gap-4



            border

            border-white/20

            "

          >


            <Target />



            <div>


              <p

                className="

                text-sm

                text-white/80

                "

              >

                Hiring Rate

              </p>



              <h3

                className="

                text-2xl

                font-black

                "

              >

                {hiringRate}%


              </h3>


            </div>



          </div>









          {bestCandidate && (


            <div

              className="

              bg-white

              dark:bg-[#111827]



              text-slate-800

              dark:text-white



              rounded-2xl



              p-5



              border

              border-white/30

              dark:border-slate-700



              transition-all

              duration-500

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


                <Trophy size={20}/>

                Best Candidate


              </div>






              <h2

                className="

                text-xl

                font-black

                mt-3

                "

              >

                {bestCandidate.name}


              </h2>






              <p

                className="

                text-slate-500

                dark:text-slate-400

                "

              >

                AI Match Score:


                <span

                  className="

                  ml-1

                  font-bold



                  text-green-600

                  dark:text-green-400

                  "

                >

                  {bestCandidate.score}%


                </span>


              </p>




            </div>


          )}




        </div>




      </div>



    </div>

  );

}