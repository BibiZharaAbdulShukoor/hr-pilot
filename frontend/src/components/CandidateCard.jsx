import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Github,
  Linkedin,
  Globe,
  Sparkles,
  Trash2,
  Eye,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function CandidateCard({ candidate, onDelete }) {
  const navigate = useNavigate();

  const [showDelete, setShowDelete] = useState(false);

  const skills = Array.isArray(candidate.skills)
    ? candidate.skills
    : typeof candidate.skills === "string"
      ? candidate.skills.split(",").map((skill) => skill.trim())
      : [];

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

        "
      >
        {/* GLOW */}

        <div
          className="

          absolute

          w-52

          h-52

          rounded-full



          bg-white/30



          dark:bg-[#0CA0C7]/20



          blur-3xl



          right-[-70px]

          top-[-70px]

          "
        />

        <div
          className="

          relative

          flex

          justify-between

          items-center

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

              bg-white/20



              dark:bg-white/10



              backdrop-blur-xl



              border

              border-white/20



              p-4



              rounded-2xl

              "
            >
              <User size={35} />
            </div>

            <div>
              <h2
                className="

                text-2xl

                font-black

                "
              >
                {candidate.name}
              </h2>

              <p
                className="

                opacity-90

                mt-1

                "
              >
                {candidate.experience_level || "Candidate"}
              </p>
            </div>
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
            <Sparkles size={28} />
          </div>
        </div>
      </div>

      {/* BODY */}

      <div
        className="

        p-6

        space-y-5

        "
      >
        {/* AI SCORE */}

        <div
          className="

          flex

          justify-between

          items-center



          bg-cyan-50

          dark:bg-white/10



          rounded-2xl



          p-4



          border

          border-cyan-100

          dark:border-white/10

          "
        >
          <div
            className="

            flex

            items-center

            gap-2



            text-[#0CA0C7]

            dark:text-[#61D7E5]



            font-black

            "
          >
            <Sparkles size={20} />
            AI Score
          </div>

          <div
            className="

            text-3xl

            font-black

            text-[#0CA0C7]

            dark:text-[#61D7E5]

            "
          >
            {candidate.score || 0}%
          </div>
        </div>

        {/* INFORMATION */}

        <div
          className="

          space-y-3

          "
        >
          <div
            className="

            flex

            items-center

            gap-3



            text-slate-600

            dark:text-slate-300



            "
          >
            <Mail
              size={18}
              className="
            text-[#0CA0C7]
            dark:text-[#61D7E5]
            "
            />

            <span>{candidate.email || "No email"}</span>
          </div>

          <div
            className="

            flex

            items-center

            gap-3



            text-slate-600

            dark:text-slate-300

            "
          >
            <Phone
              size={18}
              className="
            text-[#0CA0C7]
            dark:text-[#61D7E5]
            "
            />

            <span>{candidate.phone || "No phone"}</span>
          </div>

          <div
            className="

            flex

            items-center

            gap-3



            text-slate-600

            dark:text-slate-300

            "
          >
            <MapPin
              size={18}
              className="
            text-[#0CA0C7]
            dark:text-[#61D7E5]
            "
            />

            <span>{candidate.location || "No location"}</span>
          </div>

          <div
            className="

            flex

            items-center

            gap-3



            text-slate-600

            dark:text-slate-300

            "
          >
            <GraduationCap
              size={18}
              className="
            text-[#0CA0C7]
            dark:text-[#61D7E5]
            "
            />

            <span>{candidate.education || "No education"}</span>
          </div>

          <div
            className="

            flex

            items-center

            gap-3



            text-slate-600

            dark:text-slate-300

            "
          >
            <Briefcase
              size={18}
              className="
            text-[#0CA0C7]
            dark:text-[#61D7E5]
            "
            />

            <span>{candidate.years_of_experience || 0} Years Experience</span>
          </div>
        </div>

        {/* SKILLS */}

        {skills.length > 0 && (
          <div>
            <h3
              className="

                font-black

                text-lg

                mb-3



                text-slate-800

                dark:text-white

                "
            >
              Skills
            </h3>

            <div
              className="

                flex

                flex-wrap

                gap-2

                "
            >
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="

                      px-3

                      py-1



                      rounded-full



                      bg-cyan-100



                      text-[#0CA0C7]



                      dark:bg-[#0CA0C7]/20



                      dark:text-[#61D7E5]



                      text-sm

                      font-bold

                      "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* SOCIAL */}

        <div
          className="

          flex

          gap-4

          pt-2

          "
        >
          {candidate.github && (
            <a
              href={candidate.github}
              target="_blank"
              rel="noreferrer"
              className="

                text-slate-700

                dark:text-white

                hover:scale-110

                transition

                "
            >
              <Github size={22} />
            </a>
          )}

          {candidate.linkedin && (
            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noreferrer"
              className="

                text-blue-600

                hover:scale-110

                transition

                "
            >
              <Linkedin size={22} />
            </a>
          )}

          {candidate.portfolio && (
            <a
              href={candidate.portfolio}
              target="_blank"
              rel="noreferrer"
              className="

                text-green-600

                hover:scale-110

                transition

                "
            >
              <Globe size={22} />
            </a>
          )}
        </div>
      </div>

      {/* FOOTER BUTTONS */}

      <div
        className="

        border-t



        border-slate-200

        dark:border-slate-700



        p-5



        flex

        gap-3

        "
      >
        {/* VIEW */}

        <button
          onClick={() => navigate(`/candidate/${candidate.id}`)}
          className="

          flex-1



          h-12



          rounded-2xl



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



          transition-all



          duration-500



          hover:scale-105

          "
        >
          <Eye size={18} />
          View Profile
        </button>

        {/* DELETE */}

        <button
          onClick={() => setShowDelete(true)}
          className="

          w-12

          h-12



          rounded-2xl



          bg-red-100



          text-red-600



          dark:bg-[#111827]

          dark:text-red-300



          dark:border

          dark:border-red-500/30



          flex

          items-center

          justify-center



          shadow-lg



          transition-all



          duration-500



          hover:scale-105



          hover:bg-red-200



          dark:hover:bg-red-500/20

          "
        >
          <Trash2 size={20} />
        </button>
      </div>
      <DeleteModal
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={() => {
          onDelete(candidate);
          setShowDelete(false);
        }}
        title="Delete Candidate"
        message="Are you sure you want to delete this candidate?"
      />
    </div>
  );
}
