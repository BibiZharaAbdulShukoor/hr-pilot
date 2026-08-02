import { Trophy, User, Mail, Sparkles } from "lucide-react";

export default function TopCandidates({ candidates = [] }) {
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



      rounded-[2rem]



      shadow-2xl



      p-6



      text-white



      border

      border-white/30

      dark:border-slate-700



      transition-all

      duration-700

      "
    >
      {/* GLOW LIGHT */}

      <div
        className="

        absolute

        w-40

        h-40



        bg-white/30



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

            bg-white/20

            dark:bg-white/10



            backdrop-blur-xl



            p-3



            rounded-2xl



            border

            border-white/20

            "
          >
            <Trophy size={24} />
          </div>

          <div>
            <h2
              className="

              text-xl

              font-black

              "
            >
              Top AI Candidates
            </h2>

            <p
              className="

              text-sm

              text-white/80

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

              bg-white/10

              dark:bg-white/5



              backdrop-blur-xl



              rounded-2xl



              p-6



              text-center



              border

              border-white/20

              "
            >
              <Sparkles
                className="

                mx-auto

                mb-2

                text-white/60

                "
              />

              <p className="text-white/70">No AI matches yet</p>
            </div>
          ) : (
            candidates.map((candidate, index) => (
              <div
                key={candidate.id}
                className="


                bg-white/15


                dark:bg-white/10



                backdrop-blur-xl



                border

                border-white/20



                rounded-2xl



                p-4



                flex



                items-center



                justify-between



                hover:bg-white/25



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

                    bg-white/20

                    dark:bg-white/10



                    p-3



                    rounded-xl

                    "
                  >
                    <User size={22} />
                  </div>

                  <div>
                    <h3
                      className="

                      font-black

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

                      text-white/70

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

                    bg-white



                    dark:bg-[#0f172a]



                    text-green-600



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

                    text-white/70

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
