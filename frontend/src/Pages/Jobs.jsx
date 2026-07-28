import { useEffect, useMemo, useState } from "react";
import { BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { getJobs, deleteJob } from "../api/dashboardApi";

import JobCard from "../components/JobCard";
import JobStats from "../components/JobStats";
import JobSearch from "../components/JobSearch";


export default function Jobs() {


  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");


  const navigate = useNavigate();




  useEffect(() => {

    loadJobs();

  }, []);




  async function loadJobs() {

    try {

      setLoading(true);

      setError("");

      const res = await getJobs();

      setJobs(res.data.data || []);


    } catch (err) {

      console.log(err);

      setError("Failed to load jobs.");

    } finally {

      setLoading(false);

    }

  }





  async function handleDelete(job) {


    const ok = window.confirm(
      `Delete "${job.title}" ?`
    );


    if (!ok) return;



    try {


      await deleteJob(job.id);



      setJobs((prev)=>

        prev.filter(
          (item)=>item.id !== job.id
        )

      );



    } catch(err){

      console.log(err);

      alert("Delete failed");

    }

  }





  function handleEdit(job){

    navigate(`/jobs/edit/${job.id}`);

  }






  const filteredJobs = useMemo(()=>{


    return jobs.filter((job)=>{


      const text = `

      ${job.title || ""}

      ${job.department || ""}

      ${job.location || ""}

      `
      .toLowerCase()
      .trim();



      const matchSearch =
        text.includes(
          search.toLowerCase()
        );



      const matchFilter =
        filter === "All"

        ?

        true

        :

        (job.status || "")
        .toLowerCase()
        === filter.toLowerCase();



      return matchSearch && matchFilter;


    });



  },[jobs,search,filter]);






  return (

    <div className="space-y-8">





      {/* HERO */}


      <section

        className="

        relative

        overflow-hidden



        rounded-[2rem]



        bg-gradient-to-br

        from-[#0CA0C7]

        via-[#38BDF8]

        to-[#61D7E5]



        dark:from-[#111827]

        dark:via-[#0f172a]

        dark:to-[#020617]



        text-white



        p-10



        shadow-2xl



        border

        border-white/30

        dark:border-slate-700



        transition-all

        duration-700

        "

      >



        <div

          className="

          absolute

          w-72

          h-72

          rounded-full


          bg-white/30


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

            bg-white/20

            dark:bg-white/10


            backdrop-blur-xl


            p-5


            rounded-3xl


            border

            border-white/20

            "

          >

            <BriefcaseBusiness size={42}/>

          </div>





          <div>


            <h1 className="text-5xl font-black">

              Job Management

            </h1>



            <p

              className="

              mt-3

              text-lg

              text-white/90

              "

            >

              Manage all company jobs from one intelligent dashboard.

            </p>


          </div>


        </div>


      </section>







      {/* ERROR */}


      {error && (

        <div

          className="

          bg-red-100

          text-red-600


          dark:bg-red-500/20

          dark:text-red-400



          rounded-2xl

          p-5

          font-bold

          border

          border-red-200

          dark:border-red-500/30

          "

        >

          {error}

        </div>

      )}







      {/* STATS */}

      <JobStats jobs={jobs}/>







      {/* CREATE JOB */}


      <div className="flex justify-end">


        <button

          onClick={() => navigate("/create-job")}


          className="

          px-6

          py-3


          rounded-2xl



          bg-gradient-to-r

          from-[#0CA0C7]

          to-[#61D7E5]



          dark:from-[#111827]

          dark:via-[#0f172a]

          dark:to-[#020617]



          text-white


          font-black



          border

          border-white/30

          dark:border-slate-700



          shadow-xl



          transition-all

          duration-700



          hover:scale-105

          hover:shadow-2xl

          "

        >

          + Create Job


        </button>


      </div>







      {/* SEARCH */}


      <JobSearch

        search={search}

        setSearch={setSearch}

        filter={filter}

        setFilter={setFilter}

      />







      {/* JOB LIST */}



      <div

        className="

        grid

        lg:grid-cols-2

        xl:grid-cols-3

        gap-7

        "

      >




        {loading ? (

          [...Array(6)].map((_,index)=>(


            <div

              key={index}


              className="

              h-[320px]


              rounded-[2rem]



              bg-slate-200

              dark:bg-[#111827]



              animate-pulse

              "

            />


          ))



        ) : filteredJobs.length === 0 ? (



          <div

            className="

            col-span-full

            text-center

            py-20

            "

          >



            <BriefcaseBusiness

              size={70}

              className="

              mx-auto

              mb-5


              text-slate-300

              dark:text-slate-700

              "

            />



            <h2

              className="

              text-2xl

              font-black


              text-slate-500

              dark:text-slate-400

              "

            >

              No Jobs Found


            </h2>



          </div>



        ) : (


          filteredJobs.map((job)=>(


            <JobCard

              key={job.id}

              job={job}


              onDelete={handleDelete}


              onEdit={handleEdit}

            />


          ))


        )}



      </div>




    </div>

  );

}