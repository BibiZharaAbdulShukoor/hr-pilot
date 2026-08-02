import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Sparkles, Loader, Briefcase, AlertCircle } from "lucide-react";

import { getJobs, matchCandidates } from "../api/dashboardApi";

import MatchCard from "../components/MatchCard";

export default function JobMatching() {
  const { id } = useParams();

  const [jobs, setJobs] = useState([]);

  const [selectedJob, setSelectedJob] = useState(id || "");

  const [matches, setMatches] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    loadJobs();
  }, [id]);

  async function loadJobs() {
    try {
      const res = await getJobs();

      const jobsData = res.data.data || [];

      setJobs(jobsData);

      if (id) {
        setSelectedJob(id);
      }
    } catch (err) {
      console.log(err);

      setError("Failed to load jobs");
    }
  }

  async function runMatching() {
    if (!selectedJob) {
      setError("Please select a job first");

      return;
    }

    try {
      setLoading(true);

      setError("");

      const res = await matchCandidates(selectedJob);

      setMatches(res.data.data || res.data.matches || []);
    } catch (err) {
      console.log(err);

      setError(err.response?.data?.message || "Matching failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
      space-y-10
      "
    >
      {/* HERO */}

      <section
        className="
        relative

        overflow-hidden

        rounded-[2rem]

        p-10

        text-white

        shadow-2xl


        bg-gradient-to-br

        from-[#0CA0C7]

        via-[#38BDF8]

        to-[#61D7E5]


        dark:from-[#111827]

        dark:via-[#0f172a]

        dark:to-[#020617]
        "
      >
        <div
          className="
          absolute

          w-96

          h-96

          rounded-full


          bg-white/20


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
            p-5

            rounded-3xl


            bg-white/20


            backdrop-blur-xl


            border

            border-white/20
            "
          >
            <Sparkles size={45} />
          </div>

          <div>
            <h1
              className="
              text-5xl

              font-black
              "
            >
              Job AI Matching
            </h1>

            <p
              className="
              mt-3

              opacity-90
              "
            >
              Find the best candidates for this job using AI.
            </p>
          </div>
        </div>
      </section>
      {/* SELECT JOB */}

      <div
        className="
        bg-gradient-to-br

        from-white

        via-cyan-50

        to-white


        dark:from-[#111827]

        dark:via-[#0f172a]

        dark:to-[#020617]


        rounded-[2rem]


        shadow-xl


        border

        border-white/60


        dark:border-slate-700


        p-8
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
          <Briefcase
            className="
            text-[#0CA0C7]

            dark:text-[#61D7E5]
            "
          />

          <h2
            className="
            text-2xl

            font-black

            text-slate-800

            dark:text-white
            "
          >
            Select Job Position
          </h2>
        </div>

        <div
          className="
          flex

          flex-col

          md:flex-row

          gap-5
          "
        >
          <select
            value={selectedJob}
            onChange={(e) => {
              setSelectedJob(e.target.value);

              setMatches([]);

              setError("");
            }}
            className="
            flex-1

            p-4


            rounded-2xl


            bg-white


            dark:bg-[#111827]


            border

            border-slate-200


            dark:border-slate-700


            text-slate-800


            dark:text-white


            outline-none


            focus:ring-2

            focus:ring-[#0CA0C7]
            "
          >
            <option value="">Choose Job</option>

            {jobs.map((job) => (
              <option key={job.id} value={job.id}>
                {job.title}
              </option>
            ))}
          </select>

          <button
            onClick={runMatching}
            disabled={loading}
            className="
            px-8

            py-4



            rounded-2xl



            bg-gradient-to-r



            from-[#0CA0C7]

            to-[#61D7E5]



            dark:from-[#111827]

            dark:via-[#0f172a]

            dark:to-[#020617]



            text-white


            font-black


            shadow-lg



            hover:scale-105



            transition-all

            duration-500


            disabled:opacity-50
            "
          >
            {loading ? (
              <>
                <Loader
                  className="
                    animate-spin

                    inline

                    mr-2
                    "
                />
                Searching
              </>
            ) : (
              <>
                <Sparkles
                  className="
                    inline

                    mr-2
                    "
                />
                Find AI Match
              </>
            )}
          </button>
        </div>
      </div>

      {/* ERROR */}

      {error && (
        <div
          className="
            bg-red-100


            dark:bg-red-500/10



            text-red-600


            dark:text-red-400



            p-5



            rounded-2xl



            flex

            gap-3

            items-center



            font-bold



            border

            border-red-200


            dark:border-red-500/20
            "
        >
          <AlertCircle />

          {error}
        </div>
      )}
      {/* MATCH RESULTS */}

      <div
        className="
        space-y-6
        "
      >
        {matches.length > 0
          ? matches.map((candidate, index) => (
              <MatchCard
                key={candidate.id || candidate.candidate_id || index}
                candidate={candidate}
                rank={index + 1}
              />
            ))
          : !loading && (
              <div
                className="
                rounded-[2rem]


                p-10


                text-center



                bg-gradient-to-br

                from-white

                to-cyan-50



                dark:from-[#111827]

                dark:via-[#0f172a]

                dark:to-[#020617]



                border

                border-white/60



                dark:border-slate-700



                shadow-xl
                "
              >
                <Sparkles
                  size={45}
                  className="
                  mx-auto


                  text-[#0CA0C7]


                  dark:text-[#61D7E5]
                  "
                />

                <h3
                  className="
                  mt-4


                  text-xl


                  font-black


                  text-slate-800


                  dark:text-white
                  "
                >
                  No Matches Found
                </h3>

                <p
                  className="
                  mt-2


                  text-slate-600


                  dark:text-slate-300
                  "
                >
                  Select a job and run AI matching to find candidates.
                </p>
              </div>
            )}
      </div>
    </div>
  );
}
