import {
  BriefcaseBusiness,
  CheckCircle2,
  XCircle,
  Building2,
} from "lucide-react";


export default function JobStats({ jobs = [] }) {


  const totalJobs = jobs.length;


  const activeJobs = jobs.filter(
    (job) =>
      (job.status || "").toLowerCase() === "active"
  ).length;



  const closedJobs = jobs.filter(
    (job) =>
      (job.status || "").toLowerCase() === "closed"
  ).length;



  const departments = new Set(
    jobs
      .map((job) => job.department)
      .filter(Boolean)
  ).size;





  const cards = [

    {
      title: "Total Jobs",
      value: totalJobs,
      icon: <BriefcaseBusiness size={30}/>,
    },


    {
      title: "Active Jobs",
      value: activeJobs,
      icon: <CheckCircle2 size={30}/>,
    },


    {
      title: "Closed Jobs",
      value: closedJobs,
      icon: <XCircle size={30}/>,
    },


    {
      title: "Departments",
      value: departments,
      icon: <Building2 size={30}/>,
    },

  ];





  return (

    <div

      className="
      grid
      md:grid-cols-4
      gap-6
      "

    >



      {cards.map((card,index)=>(



        <div

          key={index}

          className="

          relative

          overflow-hidden



          rounded-[2rem]

          p-6





          bg-gradient-to-br

          from-[#0CA0C7]

          to-[#61D7E5]




          dark:bg-gradient-to-br

          dark:from-[#111827]

          dark:via-[#0f172a]

          dark:to-[#020617]




          border

          border-white/30

          dark:border-slate-700




          shadow-2xl




          text-white




          transition-all

          duration-700




          hover:-translate-y-2

          "

        >




          {/* GLOW */}

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

            relative

            z-10

            "

          >





            {/* ICON */}

            <div

              className="

              w-14

              h-14



              rounded-2xl



              flex

              items-center

              justify-center



              bg-white/20



              dark:bg-white/10



              backdrop-blur-xl



              border

              border-white/20



              "

            >

              {card.icon}


            </div>








            {/* TITLE */}

            <p

              className="

              mt-6



              text-white/80



              font-semibold



              "

            >

              {card.title}


            </p>








            {/* VALUE */}

            <h2

              className="

              text-4xl

              font-black

              mt-2



              text-white



              "

            >

              {card.value}


            </h2>





          </div>






        </div>



      ))}




    </div>


  );

}