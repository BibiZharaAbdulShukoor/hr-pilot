import { Users, Mail } from "lucide-react";

export default function RecentCandidates({ candidates = [] }) {
  return (
    <div
      className="
      bg-gradient-to-br

      from-white
      to-[#e6fbff]

      dark:from-[#111827]
      dark:via-[#0f172a]
      dark:to-[#020617]

      rounded-3xl

      shadow-xl

      border
      border-slate-200
      dark:border-slate-700

      p-6

      transition-all
      duration-700
      "
    >
      {/* HEADER */}

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
          bg-gradient-to-br
          from-[#0CA0C7]
          to-[#61D7E5]

          dark:bg-white/10
          dark:from-white/10
          dark:to-white/10

          text-white

          p-3

          rounded-2xl

          shadow-lg

          backdrop-blur-xl

          border
          border-white/20

          dark:border-white/10
          "
        >
          <Users
            size={24}
            className="
            text-white
            dark:text-[#61D7E5]
            "
          />
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
            Recent Candidates
          </h2>

          <p
            className="
            text-sm

            text-slate-500
            dark:text-white/60
            "
          >
            Latest uploaded candidates
          </p>
        </div>
      </div>

      {/* LIST */}

      {/* JOB LIST */}

      <div
        className="
  space-y-4

  max-h-[420px]

  overflow-y-auto

  pr-2

  scrollbar-thin

  scrollbar-thumb-[#0CA0C7]

  dark:scrollbar-thumb-[#61D7E5]

  scrollbar-track-transparent
  "
      >
        {candidates.length === 0 ? (
          <div
            className="
            bg-slate-100

            dark:bg-white/10

            backdrop-blur-xl

            rounded-2xl

            p-6

            text-center

            border

            border-slate-200

            dark:border-white/10
            "
          >
            <p
              className="
              text-slate-400
              dark:text-white/60
              "
            >
              No candidates found
            </p>
          </div>
        ) : (
          candidates.map((candidate, index) => (
            <div
              key={candidate.id || index}
              className="
              flex

              justify-between

              items-center


              p-4


              rounded-2xl


              bg-white


              dark:bg-white/10


              backdrop-blur-xl


              border


              border-slate-200


              dark:border-white/10


              hover:shadow-md


              hover:-translate-y-1


              transition-all

              duration-300
              "
            >
              {/* INFO */}

              <div
                className="
                flex

                items-center

                gap-4
                "
              >
                <div
                  className="
                  w-12

                  h-12


                  rounded-2xl


                  bg-[#61D7E5]/20


                  dark:bg-[#0CA0C7]/20


                  flex

                  items-center

                  justify-center
                  "
                >
                  <span
                    className="
                    text-[#0CA0C7]

                    dark:text-[#61D7E5]

                    font-black

                    text-lg
                    "
                  >
                    {candidate.name?.charAt(0)}
                  </span>
                </div>

                <div>
                  <h3
                    className="
                    font-black

                    text-slate-800

                    dark:text-white
                    "
                  >
                    {candidate.name}
                  </h3>

                  <div
                    className="
                    flex

                    items-center

                    gap-2


                    text-sm


                    text-slate-500


                    dark:text-white/60


                    mt-2
                    "
                  >
                    <Mail size={14} />

                    {candidate.email}
                  </div>
                </div>
              </div>

              {/* SCORE */}

              {candidate.score && (
                <div
                  className="
                  bg-[#61D7E5]/20


                  dark:bg-[#0CA0C7]/30


                  text-[#0CA0C7]


                  dark:text-[#61D7E5]


                  px-4


                  py-2


                  rounded-full


                  font-black


                  text-sm
                  "
                >
                  {candidate.score}%
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
