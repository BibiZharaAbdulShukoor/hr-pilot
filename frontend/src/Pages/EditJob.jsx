import { useEffect, useState } from "react";

import { Save, ArrowLeft, Loader, Briefcase } from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import { getJobById, updateJob } from "../api/dashboardApi";

export default function EditJob() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",

    company: "",

    location: "",

    employment_type: "",

    experience: "",

    salary: "",

    description: "",

    status: "Active",
  });

  useEffect(() => {
    loadJob();
  }, []);

  async function loadJob() {
    try {
      const res = await getJobById(id);

      const data = res.data.data;

      setForm({
        title: data.title || "",

        company: data.company || "",

        location: data.location || "",

        employment_type: data.employment_type || "",

        experience: data.experience || "",

        salary: data.salary || "",

        description: data.description || "",

        status: data.status || "Active",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function change(e) {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  }

  async function saveJob(e) {
    e.preventDefault();

    try {
      setSaving(true);

      await updateJob(id, form);

      navigate("/jobs");
    } catch (error) {
      console.log(error);

      alert("Update Failed");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center">
        <Loader className="animate-spin text-[#0CA0C7]" size={40} />
      </div>
    );
  }

  return (
    <div className="space-y-10">
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




        border

        border-white/30

        dark:border-white/10


        "
      >
        <div
          className="

          absolute

          w-96

          h-96

          right-[-120px]

          top-[-120px]

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

            p-5

            rounded-3xl


            bg-white/20


            dark:bg-white/10



            backdrop-blur-xl



            border

            border-white/20

            "
          >
            <Briefcase size={45} />
          </div>

          <div>
            <h1
              className="

              text-5xl

              font-black

              "
            >
              Edit Job 🚀
            </h1>

            <p
              className="

              mt-3

              text-white/90

              "
            >
              Update job information and recruitment details
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}

      <form
        onSubmit={saveJob}
        className="

        relative

        overflow-hidden



        bg-gradient-to-br

        from-white

        via-cyan-50

        to-white



        dark:from-[#111827]

        dark:via-[#0f172a]

        dark:to-[#020617]



        rounded-[2rem]



        p-8



        shadow-xl




        border

        border-white/60

        dark:border-white/10



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

        right-[-50px]

        top-[-50px]

        rounded-full

        bg-[#61D7E5]/30

        dark:bg-[#0CA0C7]/20

        blur-3xl

        "
        />

        <div className="relative z-10 space-y-6">
          {/* TITLE */}

          <div>
            <label
              className="

      font-bold

      text-slate-700

      dark:text-white

      "
            >
              Job Title
            </label>

            <input
              name="title"
              value={form.title}
              onChange={change}
              placeholder="Job Title"
              className="

      w-full

      mt-2

      p-4

      rounded-2xl



      border

      border-slate-200

      dark:border-white/10



      bg-white

      dark:bg-white/10



      text-slate-800

      dark:text-white



      outline-none



      focus:ring-2

      focus:ring-[#0CA0C7]

      "
            />
          </div>

          {/* COMPANY */}

          <div>
            <label
              className="

      font-bold

      text-slate-700

      dark:text-white

      "
            >
              Company
            </label>

            <input
              name="company"
              value={form.company}
              onChange={change}
              placeholder="Company"
              className="

      w-full

      mt-2

      p-4

      rounded-2xl



      border

      border-slate-200

      dark:border-white/10



      bg-white

      dark:bg-white/10



      text-slate-800

      dark:text-white



      outline-none



      focus:ring-2

      focus:ring-[#0CA0C7]

      "
            />
          </div>

          {/* LOCATION */}

          <div>
            <label
              className="

      font-bold

      text-slate-700

      dark:text-white

      "
            >
              Location
            </label>

            <input
              name="location"
              value={form.location}
              onChange={change}
              placeholder="Location"
              className="

      w-full

      mt-2

      p-4

      rounded-2xl



      border

      border-slate-200

      dark:border-white/10



      bg-white

      dark:bg-white/10



      text-slate-800

      dark:text-white



      outline-none



      focus:ring-2

      focus:ring-[#0CA0C7]

      "
            />
          </div>

          {/* EMPLOYMENT + EXPERIENCE */}

          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="employment_type"
              value={form.employment_type}
              onChange={change}
              placeholder="Employment Type"
              className="

      w-full

      p-4

      rounded-2xl



      border

      border-slate-200

      dark:border-white/10



      bg-white

      dark:bg-white/10



      text-slate-800

      dark:text-white



      outline-none

      "
            />

            <input
              name="experience"
              value={form.experience}
              onChange={change}
              placeholder="Experience"
              className="

      w-full

      p-4

      rounded-2xl



      border

      border-slate-200

      dark:border-white/10



      bg-white

      dark:bg-white/10



      text-slate-800

      dark:text-white



      outline-none

      "
            />
          </div>

          {/* SALARY */}

          <input
            name="salary"
            value={form.salary}
            onChange={change}
            placeholder="Salary"
            className="

      w-full

      p-4

      rounded-2xl



      border

      border-slate-200

      dark:border-white/10



      bg-white

      dark:bg-white/10



      text-slate-800

      dark:text-white



      outline-none



      focus:ring-2

      focus:ring-[#0CA0C7]

      "
          />

          {/* DESCRIPTION */}

          <textarea
            rows={7}
            name="description"
            value={form.description}
            onChange={change}
            placeholder="Description"
            className="

      w-full

      p-4

      rounded-2xl



      border

      border-slate-200

      dark:border-white/10



      bg-white

      dark:bg-white/10



      text-slate-800

      dark:text-white



      outline-none



      resize-none



      focus:ring-2

      focus:ring-[#0CA0C7]

      "
          />

          {/* STATUS */}

          <select
            name="status"
            value={form.status}
            onChange={change}
            className="

      w-full

      p-4

      rounded-2xl



      border

      border-slate-200

      dark:border-white/10



      bg-white

      dark:bg-white/10



      text-slate-800

      dark:text-white



      outline-none



      focus:ring-2

      focus:ring-[#0CA0C7]

      "
          >
            <option className="text-black">Active</option>

            <option className="text-black">Closed</option>
          </select>

          {/* BUTTONS */}

          <div
            className="

      flex

      gap-5

      pt-4

      "
          >
            <button
              type="button"
              onClick={() => navigate("/jobs")}
              className="

      flex-1

      p-4

      rounded-2xl



      bg-slate-200



      dark:bg-white/10



      text-slate-700



      dark:text-white



      font-black



      flex

      items-center

      justify-center

      gap-2



      hover:scale-105



      transition

      "
            >
              <ArrowLeft size={20} />
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="

      flex-1

      p-4

      rounded-2xl



      bg-gradient-to-r

      from-[#0CA0C7]

      to-[#61D7E5]



      dark:from-[#111827]

      dark:to-[#020617]



      text-white



      font-black



      flex

      items-center

      justify-center

      gap-2



      shadow-lg



      hover:scale-105



      transition

      "
            >
              <Save size={20} />

              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
