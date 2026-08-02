import { useEffect, useState } from "react";

import {
  Sparkles,
  Loader2,
  Trophy,
  Briefcase,
  Users,
  AlertCircle,
  BrainCircuit,
} from "lucide-react";

import { getJobs, matchCandidates } from "../api/dashboardApi";

import MatchCard from "../components/MatchCard";

export default function AIMatching() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState("");
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadJobs();
  }, []);

  async function loadJobs() {
    try {
      setJobsLoading(true);

      const res = await getJobs();

      setJobs(res.data.data || []);
    } catch {
      setError("Failed to load jobs");
    } finally {
      setJobsLoading(false);
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

      setMatches([]);

      const res = await matchCandidates(selectedJob);

      setMatches(res.data.data || []);
    } catch {
      setError("AI Matching failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      {/* Hero */}
      {/* HERO */}

      <section
        className="
        relative

        overflow-hidden

        rounded-[32px]

        p-10

        border

        border-slate-200

        dark:border-slate-700

        bg-gradient-to-br

        from-[#0CA0C7]

        via-[#37C8E8]

        to-[#61D7E5]

        dark:from-[#111827]

        dark:via-[#0f172a]

        dark:to-[#020617]

        shadow-2xl
        "
      >
        <div
          className="
          absolute

          -top-28

          -right-28

          w-96

          h-96

          rounded-full

          bg-white/20

          dark:bg-cyan-400/10

          blur-3xl
          "
        />

        <div
          className="
          absolute

          -bottom-20

          -left-20

          w-80

          h-80

          rounded-full

          bg-white/10

          blur-3xl
          "
        />

        <div
          className="
          relative

          flex

          flex-col

          lg:flex-row

          lg:items-center

          lg:justify-between

          gap-8
          "
        >
          <div
            className="
            flex

            items-center

            gap-6
            "
          >
            <div
              className="
              h-24

              w-24

              rounded-3xl

              flex

              items-center

              justify-center

              bg-white/20

              backdrop-blur-xl

              shadow-xl
              "
            >
              <BrainCircuit size={48} className="text-white" />
            </div>

            <div>
              <h1
                className="
                text-5xl

                font-black

                text-white
                "
              >
                AI Matching Center
              </h1>

              <p
                className="
                mt-4

                text-lg

                text-white/90

                max-w-2xl
                "
              >
                Discover the most suitable candidates using AI semantic
                matching, skill analysis and experience comparison.
              </p>
            </div>
          </div>

          <div
            className="
            flex

            gap-5
            "
          >
            <div
              className="
              min-w-[150px]

              rounded-3xl

              bg-white/15

              backdrop-blur-xl

              p-6

              text-center
              "
            >
              <div
                className="
                text-4xl

                font-black

                text-white
                "
              >
                {jobs.length}
              </div>

              <p className="mt-2 text-white/80">Jobs</p>
            </div>

            <div
              className="
              min-w-[150px]

              rounded-3xl

              bg-white/15

              backdrop-blur-xl

              p-6

              text-center
              "
            >
              <div
                className="
                text-4xl

                font-black

                text-white
                "
              >
                {matches.length}
              </div>

              <p className="mt-2 text-white/80">Matches</p>
            </div>
          </div>
        </div>
      </section>

      {/* ERROR */}

      {error && (
        <div
          className="
          rounded-2xl

          border

          border-red-200

          dark:border-red-500/20

          bg-red-50

          dark:bg-red-500/10

          p-5

          flex

          items-center

          gap-3

          text-red-600

          dark:text-red-400

          font-bold
          "
        >
          <AlertCircle size={22} />

          {error}
        </div>
      )}
      {/* JOB SELECT */}

      <section
        className="
        rounded-[30px]

        border

        border-slate-200

        dark:border-slate-700

        bg-white

        dark:bg-[#0f172a]

        shadow-xl

        p-8
        "
      >
        <div
          className="
          flex

          items-center

          gap-3

          mb-8
          "
        >
          <div
            className="
            w-14

            h-14

            rounded-2xl

            flex

            items-center

            justify-center

            bg-cyan-100

            dark:bg-[#123548]

            text-[#0CA0C7]
            "
          >
            <Briefcase size={28} />
          </div>

          <div>
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

            <p
              className="
              mt-1

              text-slate-500

              dark:text-slate-400
              "
            >
              Choose a job and let AI rank the best candidates.
            </p>
          </div>
        </div>

        <div
          className="
          flex

          flex-col

          lg:flex-row

          gap-5
          "
        >
          <select
            value={selectedJob}
            onChange={(e) => {
              setSelectedJob(e.target.value);

              setMatches([]);
            }}
            className="
            flex-1

            h-16

            rounded-2xl

            border

            border-slate-200

            dark:border-slate-700

            bg-slate-50

            dark:bg-slate-800

            px-6

            text-slate-800

            dark:text-white

            outline-none

            focus:ring-2

            focus:ring-[#0CA0C7]
            "
          >
            <option value="">
              {jobsLoading ? "Loading jobs..." : "Choose Job"}
            </option>

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
            h-16

            px-10

            rounded-2xl

            flex

            items-center

            justify-center

            gap-3

            font-black

            text-white

            bg-gradient-to-r

            from-[#0CA0C7]

            to-[#61D7E5]

            hover:scale-105

            transition-all

            duration-300

            disabled:opacity-60

            shadow-lg
            "
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" />
                Matching...
              </>
            ) : (
              <>
                <Sparkles size={20} />
                Run AI Match
              </>
            )}
          </button>
        </div>
      </section>

      {/* RESULTS */}

      {matches.length > 0 && (
        <section
          className="
          space-y-8
          "
        >
          <div
            className="
            flex

            items-center

            justify-between

            flex-wrap

            gap-4
            "
          >
            <div
              className="
              flex

              items-center

              gap-4
              "
            >
              <div
                className="
                w-14

                h-14

                rounded-2xl

                flex

                items-center

                justify-center

                bg-yellow-100

                dark:bg-yellow-500/20

                text-yellow-600

                dark:text-yellow-300
                "
              >
                <Trophy size={28} />
              </div>

              <div>
                <h2
                  className="
                  text-3xl

                  font-black

                  text-slate-800

                  dark:text-white
                  "
                >
                  Top AI Candidates
                </h2>

                <p
                  className="
                  mt-1

                  text-slate-500

                  dark:text-slate-400
                  "
                >
                  Ranked from highest AI score to lowest.
                </p>
              </div>
            </div>

            <div
              className="
              px-5

              py-3

              rounded-2xl

              bg-cyan-50

              dark:bg-[#123548]

              text-[#0CA0C7]

              font-bold
              "
            >
              {matches.length} Candidates
            </div>
          </div>

          {/* MATCH CARDS */}

          <div
            className="
            flex

            flex-col

            gap-8
            "
          >
            {matches.map((candidate, index) => (
              <MatchCard
                key={candidate.id || candidate.candidate_id}
                candidate={candidate}
                rank={index + 1}
              />
            ))}
          </div>
        </section>
      )}

      {/* EMPTY STATE */}

      {!loading && selectedJob && matches.length === 0 && (
        <section
          className="
            rounded-[30px]

            border

            border-slate-200

            dark:border-slate-700

            bg-white

            dark:bg-[#0f172a]

            shadow-xl

            p-16

            text-center
            "
        >
          <Users
            size={72}
            className="
              mx-auto

              mb-6

              text-slate-300

              dark:text-slate-600
              "
          />

          <h2
            className="
              text-3xl

              font-black

              text-slate-700

              dark:text-white
              "
          >
            No Candidates Matched
          </h2>

          <p
            className="
              mt-4

              text-slate-500

              dark:text-slate-400

              max-w-xl

              mx-auto
              "
          >
            No suitable candidates were found for this position. Try selecting
            another job or upload more candidate resumes.
          </p>
        </section>
      )}
    </div>
  );
}
