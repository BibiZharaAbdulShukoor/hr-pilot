import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  User,
  Mail,
  Brain,
  Code,
  Briefcase,
  Trophy,
  Medal,
  Sparkles,
  Eye,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function MatchCard({ candidate, rank }) {
  const navigate = useNavigate();

  const [openRecommendation, setOpenRecommendation] = useState(false);

  const score = Number(
    candidate.score ?? candidate.similarity ?? candidate.matchScore ?? 0,
  );

  const embeddingScore = Number(
    candidate.embeddingScore ?? candidate.embedding_score ?? 0,
  );

  const skillScore = Number(candidate.skillScore ?? candidate.skill_score ?? 0);

  const experienceScore = Number(
    candidate.experienceScore ?? candidate.experience_score ?? 0,
  );

  const explanation = candidate.explanation || candidate.reason || "";

  const skills = Array.isArray(candidate.skills)
    ? candidate.skills
    : typeof candidate.skills === "string"
      ? candidate.skills.split(",").map((item) => item.trim())
      : [];

  function scoreColor() {
    if (score >= 90) return "text-emerald-500 dark:text-emerald-400";

    if (score >= 70) return "text-[#0CA0C7] dark:text-[#61D7E5]";

    return "text-slate-500 dark:text-slate-300";
  }

  function progressColor() {
    if (score >= 90) return "bg-emerald-500 dark:bg-emerald-400";

    if (score >= 70) return "bg-[#0CA0C7] dark:bg-[#61D7E5]";

    return "bg-slate-400 dark:bg-slate-500";
  }

  function RankBadge() {
    if (rank === 1) {
      return (
        <div
          className="
          inline-flex
          items-center
          gap-2

          px-3
          py-1.5

          rounded-full

          bg-yellow-100
          text-yellow-600

          dark:bg-yellow-500/20
          dark:text-yellow-300

          text-xs
          font-bold
          "
        >
          <Trophy size={13} />
          Best Match
        </div>
      );
    }

    if (rank <= 3) {
      return (
        <div
          className="
          inline-flex
          items-center
          gap-2

          px-3
          py-1.5

          rounded-full

          bg-cyan-100
          text-[#0CA0C7]

          dark:bg-[#0CA0C7]/20
          dark:text-[#61D7E5]

          text-xs
          font-bold
          "
        >
          <Medal size={13} />
          Top {rank}
        </div>
      );
    }

    return (
      <div
        className="
        inline-flex
        items-center

        px-3
        py-1.5

        rounded-full

        bg-slate-100
        text-slate-600

        dark:bg-slate-700
        dark:text-slate-300

        text-xs
        font-semibold
        "
      >
        Rank #{rank}
      </div>
    );
  }

  return (
    <div
      className="
      w-full
      overflow-hidden

      rounded-[2rem]

      bg-gradient-to-br
      from-white
      to-cyan-50

      dark:bg-gradient-to-br
      dark:from-[#111827]
      dark:via-[#0f172a]
      dark:to-[#020617]

      border
      border-white/60
      dark:border-slate-700

      shadow-xl

      transition-all
      duration-700

      hover:-translate-y-2
      "
    >
      <div
        className="
        grid

        lg:grid-cols-[270px_420px_1fr]

        divide-y

        lg:divide-y-0

        lg:divide-x

        divide-slate-200
        dark:divide-slate-700
        "
      >
        {/* ================= LEFT PANEL ================= */}
        <div className="p-6 flex flex-col">
          <RankBadge />

          <div className="mt-6 flex items-center gap-4">
            <div
              className="
              h-16
              w-16

              rounded-2xl

              bg-gradient-to-br
              from-[#0CA0C7]
              to-[#61D7E5]

              flex
              items-center
              justify-center

              shadow-lg
              "
            >
              <User size={30} className="text-white" />
            </div>

            <div className="min-w-0">
              <h2
                className="
                text-3xl

                font-bold

                text-slate-800
                dark:text-white

                truncate
                "
              >
                {candidate.name || "Unknown Candidate"}
              </h2>

              <div
                className="
                mt-2

                flex

                items-center

                gap-2

                text-slate-600
                dark:text-slate-300

                text-sm
                "
              >
                <Mail size={14} />

                <span className="truncate">
                  {candidate.email || "No Email"}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* ================= CENTER PANEL ================= */}
        <div className="p-6">
          <div
            className="
            flex
            items-center
            justify-between
            "
          >
            <h3
              className="
              text-base

              font-bold

              text-slate-800
              dark:text-white
              "
            >
              AI Match Score
            </h3>

            <span
              className={`
              text-4xl

              font-extrabold

              ${scoreColor()}
              `}
            >
              {score.toFixed(1)}%
            </span>
          </div>

          {/* Progress */}

          <div className="mt-3">
            <div
              className="
              h-2

              rounded-full

              overflow-hidden

              bg-slate-200
              dark:bg-slate-700
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
                  width: `${score}%`,
                }}
              />
            </div>
          </div>

          {/* Score Cards */}

          <div className="mt-6 grid grid-cols-3 gap-3">
            <ScoreItem
              icon={<Brain size={18} />}
              title="Semantic"
              value={embeddingScore}
            />

            <ScoreItem
              icon={<Code size={18} />}
              title="Skills"
              value={skillScore}
            />

            <ScoreItem
              icon={<Briefcase size={18} />}
              title="Experience"
              value={experienceScore}
            />
          </div>
        </div>
        {/* ================= RIGHT PANEL ================= */}
        <div className="p-6 flex flex-col justify-between">
          {/* Skills */}

          <div>
            <h3
              className="
              text-base

              font-bold

              text-slate-800
              dark:text-white

              mb-4
              "
            >
              Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <div
                    key={index}
                    className="
                    flex

                    items-center

                    gap-2

                    rounded-full

                    px-3

                    py-1.5

                    bg-cyan-100

                    border

                    border-cyan-200

                    dark:bg-[#0CA0C7]/10

                    dark:border-[#0CA0C7]/20
                    "
                  >
                    <CheckCircle2
                      size={13}
                      className="
                      text-[#0CA0C7]
                      dark:text-[#61D7E5]
                      "
                    />

                    <span
                      className="
                      text-xs

                      font-semibold

                      text-slate-700
                      dark:text-slate-200
                      "
                    >
                      {skill}
                    </span>
                  </div>
                ))
              ) : (
                <span
                  className="
                  text-slate-500
                  dark:text-slate-400
                  "
                >
                  No skills available
                </span>
              )}
            </div>
          </div>

          {/* ================= AI Recommendation ================= */}

          {explanation && (
            <div
              className="
    mt-6
    rounded-2xl
    border
    border-slate-200
    dark:border-slate-700
    overflow-hidden
    "
            >
              <button
                onClick={() => setOpenRecommendation(!openRecommendation)}
                className="
      w-full
      px-4
      py-3
      flex
      items-center
      justify-between
      bg-cyan-50
      hover:bg-cyan-100
      dark:bg-white/10
      dark:hover:bg-white/20
      transition
      "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
          w-9
          h-9
          rounded-xl
          bg-gradient-to-br
          from-[#0CA0C7]
          to-[#61D7E5]
          flex
          items-center
          justify-center
          "
                  >
                    <Sparkles size={16} className="text-white" />
                  </div>

                  <div className="text-left">
                    <h4
                      className="
            text-sm
            font-bold
            text-slate-800
            dark:text-white
            "
                    >
                      AI Recommendation
                    </h4>

                    <p
                      className="
            text-xs
            text-slate-600
            dark:text-slate-400
            "
                    >
                      View AI analysis
                    </p>
                  </div>
                </div>

                {openRecommendation ? (
                  <ChevronUp
                    className="
          text-[#0CA0C7]
          dark:text-[#61D7E5]
          "
                  />
                ) : (
                  <ChevronDown
                    className="
          text-[#0CA0C7]
          dark:text-[#61D7E5]
          "
                  />
                )}
              </button>

              {openRecommendation && (
                <div
                  className="
        p-5
        bg-white
        dark:bg-[#111827]
        border-t
        border-slate-200
        dark:border-slate-700
        "
                >
                  <div
                    className="
          border-l-4
          border-[#0CA0C7]
          dark:border-[#61D7E5]
          pl-5
          "
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({ children }) => (
                          <h1 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                            {children}
                          </h1>
                        ),

                        h2: ({ children }) => (
                          <h2 className="text-xl font-bold mt-6 mb-3 text-slate-900 dark:text-white">
                            {children}
                          </h2>
                        ),

                        h3: ({ children }) => (
                          <h3 className="text-lg font-bold mt-5 mb-2 text-slate-900 dark:text-white">
                            {children}
                          </h3>
                        ),

                        h4: ({ children }) => (
                          <h4 className="text-base font-semibold mt-4 mb-2 text-slate-900 dark:text-white">
                            {children}
                          </h4>
                        ),

                        p: ({ children }) => (
                          <p className="text-sm leading-7 mb-4 text-slate-700 dark:text-slate-300">
                            {children}
                          </p>
                        ),

                        strong: ({ children }) => (
                          <strong className="font-bold text-slate-900 dark:text-white">
                            {children}
                          </strong>
                        ),

                        ul: ({ children }) => (
                          <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700 dark:text-slate-300">
                            {children}
                          </ul>
                        ),

                        ol: ({ children }) => (
                          <ol className="list-decimal pl-6 mb-4 space-y-2 text-slate-700 dark:text-slate-300">
                            {children}
                          </ol>
                        ),

                        li: ({ children }) => (
                          <li className="leading-7">{children}</li>
                        ),
                      }}
                    >
                      {explanation}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Button */}

          <button
            onClick={() =>
              navigate(`/candidate/${candidate.candidate_id || candidate.id}`)
            }
            className="
            mt-6

            w-full

            rounded-2xl

            py-3

            bg-gradient-to-r

            from-[#0CA0C7]

            to-[#61D7E5]


            dark:from-[#111827]

            dark:via-[#0f172a]

            dark:to-[#020617]


            text-white

            font-black


            flex

            items-center

            justify-center

            gap-2


            shadow-lg


            hover:scale-[1.02]


            transition-all
            "
          >
            <Eye size={18} />
            View Candidate Profile
          </button>
        </div>
      </div>
    </div>
  );
}
function ScoreItem({ icon, title, value }) {
  const percentage = Number(value || 0);

  function valueColor() {
    if (percentage >= 90) return "text-emerald-500 dark:text-emerald-400";

    if (percentage >= 70) return "text-[#0CA0C7] dark:text-[#61D7E5]";

    return "text-slate-500 dark:text-slate-300";
  }

  function progressColor() {
    if (percentage >= 90) return "bg-emerald-500 dark:bg-emerald-400";

    if (percentage >= 70) return "bg-[#0CA0C7] dark:bg-[#61D7E5]";

    return "bg-slate-400 dark:bg-slate-500";
  }

  return (
    <div
      className="
      rounded-xl

      border

      border-cyan-100

      dark:border-slate-700


      bg-white

      dark:bg-[#1A2332]


      p-3


      transition-all


      duration-300


      hover:border-[#0CA0C7]

      dark:hover:border-[#61D7E5]


      hover:-translate-y-1
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
          w-9

          h-9

          rounded-xl


          flex

          items-center

          justify-center


          bg-cyan-100


          text-[#0CA0C7]


          dark:bg-[#0CA0C7]/15


          dark:text-[#61D7E5]
          "
        >
          {icon}
        </div>

        <div className="flex-1">
          <p
            className="
            text-xs

            font-medium


            text-slate-600


            dark:text-slate-400
            "
          >
            {title}
          </p>

          <h3
            className={`
            mt-1

            text-lg

            font-bold

            ${valueColor()}
            `}
          >
            {percentage.toFixed(0)}%
          </h3>
        </div>
      </div>

      <div
        className="
        mt-3

        h-1.5

        rounded-full

        overflow-hidden


        bg-slate-200


        dark:bg-slate-700
        "
      >
        <div
          className={`
          h-full

          rounded-full


          ${progressColor()}
          `}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}
