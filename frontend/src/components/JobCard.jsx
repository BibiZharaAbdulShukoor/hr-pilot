import {
  Briefcase,
  MapPin,
  CalendarDays,
  DollarSign,
  Eye,
  Trash2,
  Pencil,
  Clock,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

export default function JobCard({ job, onDelete, onEdit }) {
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div
      className="
    w-full
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
          items-start
          "
        >
          <div>
            <h2 className="text-2xl font-black">{job.title}</h2>

            <p className="opacity-90 mt-2">{job.department || "Department"}</p>
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
            <Briefcase size={28} />
          </div>
        </div>
      </div>

      {/* BODY */}

      <div
        className="
        p-6
        space-y-4
        "
      >
        <div className="flex items-center gap-3">
          <MapPin
            size={18}
            className="
            text-[#0CA0C7]
            dark:text-[#61D7E5]
            "
          />

          <span
            className="
            text-slate-600
            dark:text-slate-300
            "
          >
            {job.location || "Remote"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Clock
            size={18}
            className="
            text-purple-600
            dark:text-[#61D7E5]
            "
          />

          <span
            className="
            text-slate-600
            dark:text-slate-300
            "
          >
            {job.job_type || "Full Time"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <DollarSign
            size={18}
            className="
            text-green-600
            dark:text-green-400
            "
          />

          <span
            className="
            text-slate-600
            dark:text-slate-300
            "
          >
            {job.salary || "Negotiable"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays
            size={18}
            className="
            text-orange-600
            dark:text-orange-400
            "
          />

          <span
            className="
            text-slate-600
            dark:text-slate-300
            "
          >
            {job.created_at
              ? new Date(job.created_at).toLocaleDateString()
              : "Recently"}
          </span>
        </div>

        <div className="pt-2">
          <span
            className={`
            px-4
            py-2

            rounded-full

            font-bold

            text-sm


            ${
              job.status === "Closed"
                ? `
                  bg-red-100
                  text-red-600

                  dark:bg-red-500/20
                  dark:text-red-400
                `
                : `
                  bg-emerald-100
                  text-emerald-700

                  dark:bg-emerald-500/20
                  dark:text-emerald-400
                `
            }

            `}
          >
            {job.status || "Active"}
          </span>
        </div>
      </div>

      {/* FOOTER */}
      {/* FOOTER BUTTONS */}

      <div
        className="
  border-t

  border-slate-200
  dark:border-slate-700

  p-5

  flex

  gap-3

  items-center
  "
      >
        {/* VIEW */}

        <button
          onClick={() => navigate(`/jobs/${job.id}`)}
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


    dark:border

    dark:border-slate-700


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
          View
        </button>

        {/* EDIT */}

        <button
          onClick={() => onEdit(job)}
          className="
    w-12

    h-12


    rounded-2xl


    bg-yellow-100

    text-yellow-700



    dark:bg-[#111827]

    dark:text-yellow-300


    dark:border

    dark:border-yellow-500/30



    flex

    items-center

    justify-center



    shadow-lg



    transition-all

    duration-500


    hover:scale-105


    hover:bg-yellow-200


    dark:hover:bg-yellow-500/20

    "
        >
          <Pencil size={20} />
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
          onDelete(job);
          setShowDelete(false);
        }}
        title="Delete Job"
        message="Are you sure you want to delete this job?"
      />
    </div>
  );
}
