import {
  User,
  Mail,
  Sparkles,
  Trophy,
  Eye,
  Brain,
  Code,
  Briefcase,
  Medal,
} from "lucide-react";

import { useNavigate } from "react-router-dom";


export default function MatchCard({ candidate, rank }) {

  const navigate = useNavigate();


  const score = Number(
    candidate.score ??
    candidate.similarity ??
    candidate.matchScore ??
    0
  );


  const embeddingScore = Number(
    candidate.embeddingScore ??
    candidate.embedding_score ??
    0
  );


  const skillScore = Number(
    candidate.skillScore ??
    candidate.skill_score ??
    0
  );


  const experienceScore = Number(
    candidate.experienceScore ??
    candidate.experience_score ??
    0
  );


  const explanation =
    candidate.explanation ||
    candidate.reason ||
    "";



  const skills =
    Array.isArray(candidate.skills)

    ? candidate.skills

    :

    typeof candidate.skills === "string"

    ?

    candidate.skills
      .split(",")
      .map((skill)=>skill.trim())

    :

    [];




  function scoreColor(){

    if(score >= 90)
      return "text-emerald-600 dark:text-emerald-400";


    if(score >=70)
      return "text-cyan-600 dark:text-cyan-400";


    return "text-orange-600 dark:text-orange-400";

  }





  function progressColor(){

    if(score >=90)
      return "bg-emerald-500";


    if(score >=70)
      return "bg-cyan-500";


    return "bg-orange-500";

  }





  function RankBadge(){


    if(rank === 1){

      return (

        <span
          className="
          flex
          items-center
          gap-1

          px-4
          py-2

          rounded-full

          bg-yellow-100
          text-yellow-700

          dark:bg-yellow-500/20
          dark:text-yellow-300

          font-bold
          text-sm
          "
        >

          <Trophy size={16}/>

          Best Match

        </span>

      );

    }



    if(rank <= 3){

      return (

        <span
          className="
          flex
          items-center
          gap-1

          px-4
          py-2

          rounded-full

          bg-cyan-100
          text-cyan-700

          dark:bg-cyan-500/20
          dark:text-cyan-300

          font-bold
          text-sm
          "
        >

          <Medal size={16}/>

          Top {rank}

        </span>

      );

    }


    return null;

  }






  return (

    <div

      className="
      relative
      overflow-hidden


      bg-gradient-to-br

      from-white
      to-cyan-50


      dark:bg-gradient-to-br

      dark:from-[#111827]
      dark:via-[#0f172a]
      dark:to-[#020617]


      rounded-[2rem]


      shadow-xl


      border

      border-white/60

      dark:border-slate-700


      transition-all

      duration-700


      hover:-translate-y-2

      "

    >



      {/* HEADER GLOW */}

      <div

        className="
        absolute

        w-52

        h-52

        rounded-full


        bg-cyan-400/20


        dark:bg-[#0CA0C7]/20


        blur-3xl


        right-[-70px]

        top-[-70px]

        "

      />




      <div className="relative z-10">



      {/* HEADER */}

      <div

        className="
        relative

        p-6

        text-white


        bg-gradient-to-r

        from-[#0CA0C7]

        to-[#61D7E5]


        dark:from-[#111827]

        dark:via-[#0f172a]

        dark:to-[#020617]


        rounded-t-[2rem]

        "

      >


        <div

          className="
          flex
          justify-between
          items-start
          "

        >


          <div>

            <div
              className="
              flex
              items-center
              gap-2

              font-black
              "
            >

              <Sparkles size={22}/>

              AI Rank #{rank}

            </div>


            <p className="mt-3 opacity-90">
              AI Candidate Recommendation
            </p>


          </div>




          <div

            className="
            bg-white/20

            dark:bg-white/10

            backdrop-blur-xl


            border

            border-white/20


            p-3

            rounded-2xl

            "

          >

            <User size={28}/>

          </div>


        </div>


      </div>

      {/* BODY */}

      <div
        className="
        p-6
        space-y-6
        "
      >


        {/* PROFILE */}

        <div
          className="
          flex
          items-center
          gap-4
          "
        >

         <div
  className="
  p-4

  rounded-3xl


  bg-white/20

  backdrop-blur-xl


  dark:bg-white/10


  border

  border-white/20


  text-white


  shadow-lg
  "
>

            <User size={34}/>

          </div>



          <div>

            <h2
              className="
              text-xl
              font-black

              text-slate-800

              dark:text-white
              "
            >

              {candidate.name || "Unknown Candidate"}

            </h2>



            <p
              className="
              flex
              items-center
              gap-2

              text-slate-600

              dark:text-slate-300

              text-sm
              "
            >

              <Mail size={15}/>

              {candidate.email || "No Email"}

            </p>


          </div>


        </div>






        {/* SCORE */}

        <div>


          <div
            className="
            flex
            justify-between
            mb-3
            font-black

            text-slate-700

            dark:text-white
            "
          >

            <span>
              AI Match Score
            </span>


            <span className={scoreColor()}>
              {score.toFixed(1)}%
            </span>


          </div>



          <div
            className="
            h-3

            rounded-full

            overflow-hidden


            bg-slate-200

            dark:bg-white/10
            "
          >

            <div
              className={`
              h-full

              rounded-full

              transition-all

              duration-700

              ${progressColor()}
              `}

              style={{
                width:`${score}%`
              }}

            />

          </div>


        </div>







        {/* SCORE DETAILS */}


        <div
          className="
          space-y-3
          "
        >


          <ScoreItem

            icon={<Brain size={18}/>}

            title="Semantic AI"

            value={embeddingScore}

          />



          <ScoreItem

            icon={<Code size={18}/>}

            title="Skills Match"

            value={skillScore}

          />



          <ScoreItem

            icon={<Briefcase size={18}/>}

            title="Experience"

            value={experienceScore}

          />


        </div>







        {/* SKILLS */}


        {
          skills.length > 0 &&

          <div
            className="
            flex
            flex-wrap
            gap-2
            "
          >

            {
              skills.map((skill,index)=>(

                <span

                  key={index}

                  className="
                  px-4
                  py-2

                  rounded-full


                  bg-cyan-100

                  text-cyan-700


                  dark:bg-cyan-500/20

                  dark:text-cyan-300


                  font-bold

                  text-sm
                  "

                >

                  {skill}

                </span>


              ))
            }


          </div>

        }






        {/* AI RECOMMENDATION */}


        {
          explanation &&

          <div
  className="
  p-5

  rounded-3xl


  bg-gradient-to-br

  from-cyan-50

  to-white


  dark:bg-gradient-to-br

  dark:from-[#111827]

  dark:via-[#0f172a]

  dark:to-[#020617]


  border

  border-cyan-100


  dark:border-slate-700


  shadow-inner

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

              <Sparkles size={18}/>

              AI Recommendation

            </div>




            <p
              className="
              mt-3

              text-slate-600

              dark:text-slate-300

              text-sm

              leading-7
              "
            >

              {explanation}

            </p>


          </div>

        }

        {/* PROFILE BUTTON */}


        <button

          onClick={() =>
            navigate(
              `/candidate/${candidate.candidate_id || candidate.id}`
            )
          }


          className="

          w-full

          py-4


          rounded-2xl


          flex

          justify-center

          items-center

          gap-2



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



          shadow-lg



          transition-all

          duration-500



          hover:scale-105


          "

        >

          <Eye size={18}/>


          View Candidate Profile


        </button>



      </div>


      </div>


    </div>

  );

}







function ScoreItem({
  icon,
  title,
  value
}) {


  return (


    <div

      className="

      flex

      justify-between

      items-center



      p-4



      rounded-2xl




      bg-slate-50



      dark:bg-white/5



      border

      border-slate-200



      dark:border-slate-700



      "

    >



      <div

        className="

        flex

        items-center

        gap-3



        font-bold



        text-slate-700



        dark:text-white



        "

      >

        {icon}


        {title}


      </div>





      <span

        className="

        font-black



        text-[#0CA0C7]



        dark:text-[#61D7E5]

        "

      >

        {Number(value || 0).toFixed(1)}%

      </span>



    </div>


  );

}