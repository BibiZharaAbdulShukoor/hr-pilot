import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
  Loader,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Github,
  Linkedin,
  Globe,
  FileText,
  Award,
  CheckCircle,
  Sparkles,
} from "lucide-react";

import { getCandidateById } from "../api/dashboardApi";

export default function CandidateDetails() {
  const { id } = useParams();

  const [candidate, setCandidate] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCandidate();
  }, []);

  async function loadCandidate() {
    try {
      const res = await getCandidateById(id);

      setCandidate(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  const API_URL = import.meta.env.VITE_API_URL;
  function openCV() {
    if (candidate?.cv_file) {
      window.open(
        `https://hr-pilot-backend.onrender.com/uploads/${candidate.cv_file}`,
        "_blank",
      );
    }
  }

  if (loading) {
    return (
      <div
        className="
        h-96
        flex
        items-center
        justify-center
        "
      >
        <Loader
          size={50}
          className="
          animate-spin
          text-[#0CA0C7]
          "
        />
      </div>
    );
  }

  if (!candidate) {
    return (
      <h1
        className="
        text-center
        text-red-500
        text-2xl
        font-black
        "
      >
        Candidate Not Found
      </h1>
    );
  }

  const skills = Array.isArray(candidate.skills)
    ? candidate.skills
    : typeof candidate.skills === "string"
      ? candidate.skills.split(",").map((skill) => skill.trim())
      : [];

  return (
    <div
      className="
space-y-8
"
    >
      {/* HERO */}

      <div
        className="

relative

overflow-hidden

rounded-[2rem]

p-10

text-white



bg-gradient-to-r

from-[#0CA0C7]

via-[#38BDF8]

to-[#61D7E5]



dark:from-[#111827]

dark:via-[#0f172a]

dark:to-[#020617]



shadow-2xl



border

border-white/30

dark:border-slate-700

"
      >
        <div
          className="

absolute

w-72

h-72

right-[-100px]

top-[-100px]

rounded-full

bg-white/30

dark:bg-[#0CA0C7]/20

blur-3xl

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



border

border-white/20



p-5



rounded-3xl

"
          >
            <User size={50} />
          </div>

          <div>
            <h1
              className="
text-4xl
font-black
"
            >
              {candidate.name}
            </h1>

            <p
              className="
mt-2
opacity-90
"
            >
              AI Candidate Profile
            </p>
          </div>
        </div>
      </div>

      {/* INFORMATION CARDS */}

      <div
        className="

grid

md:grid-cols-3

gap-6

"
      >
        <Card
          icon={<Award />}
          title="AI Score"
          value={`${candidate.score || 0}%`}
        />

        <Card
          icon={<Mail />}
          title="Email"
          value={candidate.email || "No email"}
        />

        <Card
          icon={<Phone />}
          title="Phone"
          value={candidate.phone || "No phone"}
        />

        <Card
          icon={<MapPin />}
          title="Location"
          value={candidate.location || "No location"}
        />

        <Card
          icon={<GraduationCap />}
          title="Education"
          value={candidate.education || "No education"}
        />

        <Card
          icon={<Briefcase />}
          title="Experience"
          value={`${candidate.experience_level || "N/A"} -

${candidate.years_of_experience || 0} Years`}
        />
      </div>
      {/* SKILLS */}

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
          <Sparkles
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
            Skills
          </h2>
        </div>

        <div
          className="

          flex

          flex-wrap

          gap-3

          "
        >
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <span
                key={index}
                className="

              px-4

              py-2



              rounded-full



              bg-cyan-100



              text-[#0CA0C7]



              dark:bg-[#0CA0C7]/20



              dark:text-[#61D7E5]



              font-bold

              text-sm

              "
              >
                {skill}
              </span>
            ))
          ) : (
            <p
              className="

            text-slate-500

            dark:text-slate-400

            "
            >
              No skills available
            </p>
          )}
        </div>
      </div>

      {/* SOCIAL LINKS */}

      <div
        className="

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



        p-8

        "
      >
        <h2
          className="

          text-2xl

          font-black

          text-slate-800

          dark:text-white

          mb-6

          "
        >
          Social Links
        </h2>

        <div
          className="

          space-y-4

          "
        >
          {candidate.linkedin && (
            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noreferrer"
              className="

              flex

              items-center

              gap-3



              font-bold



              text-blue-600



              hover:scale-105



              transition

              "
            >
              <Linkedin />
              LinkedIn
            </a>
          )}

          {candidate.github && (
            <a
              href={candidate.github}
              target="_blank"
              rel="noreferrer"
              className="

              flex

              items-center

              gap-3



              font-bold



              text-slate-700



              dark:text-white



              hover:scale-105



              transition

              "
            >
              <Github />
              Github
            </a>
          )}

          {candidate.portfolio && (
            <a
              href={candidate.portfolio}
              target="_blank"
              rel="noreferrer"
              className="

              flex

              items-center

              gap-3



              font-bold



              text-green-600



              hover:scale-105



              transition

              "
            >
              <Globe />
              Portfolio
            </a>
          )}
        </div>
      </div>

      {/* CV */}

      <div
        className="

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



        p-8

        "
      >
        <h2
          className="

          text-2xl

          font-black

          text-slate-800

          dark:text-white

          mb-6

          "
        >
          Candidate CV
        </h2>

        {candidate.cv_file ? (
          <button
            onClick={openCV}
            className="

              flex

              items-center

              gap-3



              px-8

              py-4



              rounded-2xl



              bg-gradient-to-r

              from-[#0CA0C7]

              to-[#61D7E5]



              text-white



              font-black



              shadow-lg



              hover:scale-105



              transition

              "
          >
            <FileText />
            Open CV
          </button>
        ) : (
          <p
            className="

              text-slate-500

              dark:text-slate-400

              "
          >
            CV not uploaded
          </p>
        )}
      </div>
    </div>
  );
}
function Card({ icon, title, value }) {
  return (
    <div
      className="
      relative
      overflow-hidden

      bg-gradient-to-br
      from-white
      via-cyan-50
      to-white

      dark:bg-gradient-to-br
      dark:from-[#111827]
      dark:via-[#0f172a]
      dark:to-[#020617]

      rounded-[2rem]
      shadow-xl

      border
      border-white/60
      dark:border-slate-700

      p-6

      transition-all
      duration-700

      hover:-translate-y-2
      "
    >
      {/* GLOW */}
      <div
        className="
        absolute
        w-32
        h-32
        right-[-40px]
        top-[-40px]
        rounded-full
        bg-[#61D7E5]/30
        dark:bg-[#0CA0C7]/20
        blur-3xl
        "
      />

      <div
        className="
        relative
        z-10

        flex
        items-center
        justify-between
        "
      >
        {/* Left */}
        <div className="flex items-center gap-4">
          <div
            className="
            w-12
            h-12

            flex
            items-center
            justify-center

            rounded-2xl

            bg-[#0CA0C7]/10
            dark:bg-white/10

            backdrop-blur-xl

            border
            border-white/20

            text-[#0CA0C7]
            dark:text-[#61D7E5]
            "
          >
            {icon}
          </div>

          <p
            className="
            font-bold
            text-slate-700
            dark:text-white
            "
          >
            {title}
          </p>
        </div>

        {/* Right */}
        <h2
          className="
    text-xs
    md:text-lg

    font-bold

    text-slate-800
    dark:text-white

    text-right

    break-all

    max-w-[65%]
  "
        >
          {value}
        </h2>
      </div>
    </div>
  );
}
