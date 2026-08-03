import { Trophy, User, Mail, Sparkles } from "lucide-react";

export default function TopCandidates({ candidates = [] }) {
  return (
    <div
      className="
      relative

      overflow-hidden

      bg-gradient-to-br

      from-white

      to-[#e6fbff]


      dark:from-[#111827]

      dark:via-[#0f172a]

      dark:to-[#020617]


      rounded-[2rem]


      shadow-2xl


      p-6


      text-slate-800

      dark:text-white


      border

      border-slate-200

      dark:border-slate-700


      transition-all

      duration-700
      "
    >
      {/* GLOW */}

      <div
        className="
        absolute

        w-40

        h-40


        bg-[#61D7E5]/30


        dark:bg-[#0CA0C7]/20


        rounded-full


        blur-3xl


        right-[-50px]

        top-[-50px]


        animate-float
        "
      />

      <div className="relative z-10">
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
            bg-[#0CA0C7]/10

            dark:bg-white/10


            backdrop-blur-xl


            p-3


            rounded-2xl


            border

            border-[#0CA0C7]/20

            dark:border-white/20
            "
          >
            <Trophy
              size={24}
              className="
              text-[#0CA0C7]

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
              Top AI Candidates
            </h2>

            <p
              className="
              text-sm

              text-slate-500

              dark:text-white/60
              "
            >
              Best matched candidates
            </p>
          </div>
        </div>

        {/* CONTENT */}

        <div className="space-y-4">
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

              dark:border-white/20
              "
            >
              <Sparkles
                className="
                mx-auto

                mb-2

                text-[#0CA0C7]

                dark:text-white/60
                "
              />

              <p
                className="
                text-slate-500

                dark:text-white/70
                "
              >
                No AI matches yet
              </p>
            </div>
          ) : (
            candidates.map((candidate, index) => (
              <div
                key={candidate.id}
                className="
                bg-white


                dark:bg-white/10


                backdrop-blur-xl


                border

                border-slate-200

                dark:border-white/20


                rounded-2xl


                p-4


                flex


                items-center


                justify-between


                hover:shadow-md


                hover:-translate-y-1


                transition-all


                duration-300
                "
              >
                {/* Candidate Info */}

                <div
                  className="
                  flex

                  items-center

                  gap-3
                  "
                >
                  <div
                    className="
                    bg-[#0CA0C7]/10

                    dark:bg-white/10


                    p-3


                    rounded-xl
                    "
                  >
                    <User
                      size={22}
                      className="
                      text-[#0CA0C7]

                      dark:text-[#61D7E5]
                      "
                    />
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

                      dark:text-white/70
                      "
                    >
                      <Mail size={13} />

                      {candidate.email}
                    </div>
                  </div>
                </div>

                {/* SCORE */}

                <div className="text-right">
                  <div
                    className="
                    bg-[#61D7E5]/20


                    dark:bg-[#0f172a]


                    text-[#0CA0C7]


                    dark:text-green-400


                    px-3


                    py-1


                    rounded-full


                    font-black


                    shadow-md
                    "
                  >
                    {candidate.score}%
                  </div>

                  <p
                    className="
                    text-xs

                    text-slate-500

                    dark:text-white/70

                    mt-2
                    "
                  >
                    Rank #{index + 1}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
