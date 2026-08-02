import { useState } from "react";

import {
  Briefcase,
  Sparkles,
  CheckCircle,
  AlertCircle,
  MapPin,
  Building,
  DollarSign,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { createJob } from "../api/dashboardApi";

export default function CreateJob() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    employment_type: "Full Time",
    experience: "Junior",
    salary: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.company.trim() ||
      !formData.description.trim()
    ) {
      setSuccess(false);

      setMessage("Title, Company and Description are required");

      return;
    }

    try {
      setLoading(true);

      setMessage("");

      const res = await createJob({
        title: formData.title.trim(),

        company: formData.company.trim(),

        location: formData.location.trim(),

        employment_type: formData.employment_type,

        experience: formData.experience,

        salary: formData.salary.trim(),

        description: formData.description.trim(),
      });

      setSuccess(true);

      setMessage("Job created successfully 🎉");

      const jobId = res.data?.data?.id;

      setTimeout(() => {
        if (jobId) {
          navigate(`/jobs/${jobId}`);
        } else {
          navigate("/jobs");
        }
      }, 1000);
    } catch (error) {
      console.log("Create Job Error:", error.response?.data || error.message);

      setSuccess(false);

      setMessage(error.response?.data?.message || "Failed to create job");
    } finally {
      setLoading(false);
    }
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
              Create New Job 🚀
            </h1>

            <p
              className="

              mt-3

              text-white/90

              "
            >
              Create professional job posts and let AI find the best candidates
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
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
        {/* GLOW EFFECT */}

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
          {/* TITLE + COMPANY */}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                className="

                font-bold

                text-slate-700

                dark:text-white

                "
              >
                Job Title *
              </label>

              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="React Developer"
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

            <div>
              <label
                className="

                font-bold

                text-slate-700

                dark:text-white

                "
              >
                Company *
              </label>

              <div className="relative">
                <Building
                  className="

                  absolute

                  left-4

                  top-4

                  text-slate-400

                  "
                />

                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Google"
                  className="

                  w-full

                  pl-12

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

                  "
                />
              </div>
            </div>
          </div>

          {/* LOCATION + SALARY */}

          <div className="grid md:grid-cols-2 gap-6">
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

              <div className="relative">
                <MapPin
                  className="

                  absolute

                  left-4

                  top-4

                  text-slate-400

                  "
                />

                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Kabul / Remote"
                  className="

                  w-full

                  pl-12

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

                  "
                />
              </div>
            </div>

            <div>
              <label
                className="

                font-bold

                text-slate-700

                dark:text-white

                "
              >
                Salary
              </label>

              <div className="relative">
                <DollarSign
                  className="

                  absolute

                  left-4

                  top-4

                  text-slate-400

                  "
                />

                <input
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="$1000 - $2500"
                  className="

                  w-full

                  pl-12

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

                  "
                />
              </div>
            </div>
          </div>

          {/* TYPE + EXPERIENCE */}

          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="employment_type"
              value={formData.employment_type}
              onChange={handleChange}
              className="

              p-4

              rounded-2xl



              border

              border-slate-200

              dark:border-white/10



              bg-white

              dark:bg-[#111827]



              text-slate-800

              dark:text-white

              "
            >
              <option>Full Time</option>

              <option>Part Time</option>

              <option>Remote</option>

              <option>Internship</option>
            </select>

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="

              p-4

              rounded-2xl



              border

              border-slate-200

              dark:border-white/10



              bg-white

              dark:bg-[#111827]



              text-slate-800

              dark:text-white

              "
            >
              <option>Junior</option>

              <option>Mid Level</option>

              <option>Senior</option>
            </select>
          </div>

          {/* DESCRIPTION */}

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="7"
            placeholder="Required skills and responsibilities..."
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



            resize-none

            "
          />

          {/* AI BOX */}

          <div
            className="

            flex

            items-center

            gap-3


            p-5


            rounded-2xl



            bg-[#61D7E5]/20



            dark:bg-white/10



            border

            border-[#61D7E5]/30



            text-[#0CA0C7]

            dark:text-[#61D7E5]

            "
          >
            <Sparkles size={22} />
            AI will generate skills and embeddings automatically for candidate
            matching.
          </div>

          {/* SUBMIT BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="

            w-full

            p-4

            rounded-2xl



            bg-gradient-to-r

            from-[#0CA0C7]

            to-[#61D7E5]



            dark:from-[#111827]

            dark:to-[#020617]



            text-white



            font-black

            text-lg



            shadow-lg



            hover:scale-[1.02]



            transition-all

            duration-300

            "
          >
            {loading ? "Creating Job..." : "Create Job"}
          </button>

          {/* MESSAGE */}

          {message && (
            <div
              className={`

              flex

              justify-center

              items-center

              gap-2



              font-bold



              ${
                success
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }



              `}
            >
              {success ? <CheckCircle size={22} /> : <AlertCircle size={22} />}

              {message}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
