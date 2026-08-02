import {
  LayoutDashboard,
  Briefcase,
  UploadCloud,
  Users,
  Sparkles,
  Brain,
  ShieldCheck,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import zahraImage from "../assets/zahra.jpeg";

function Sidebar() {
  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },

    {
      name: "Jobs",
      path: "/jobs",
      icon: <Briefcase size={20} />,
    },

    {
      name: "Candidates",
      path: "/candidates",
      icon: <Users size={20} />,
    },

    {
      name: "Upload CV",
      path: "/upload-candidate",
      icon: <UploadCloud size={20} />,
    },

    {
      name: "AI Matching",
      path: "/ai-matching",
      icon: <Sparkles size={20} />,
    },
  ];

  return (
    <aside
      className="

      fixed

      top-20

      left-0


      w-72

      h-[calc(100vh-5rem)]

      overflow-y-auto



      bg-gradient-to-br

      from-white

      to-[#e6fbff]


      dark:from-[#111827]

      dark:via-[#0f172a]

      dark:to-[#020617]


      backdrop-blur-xl


      border-r

      border-slate-200

      dark:border-slate-700


      shadow-xl


      px-5

      py-6


      flex

      flex-col


      transition-all

      duration-700

      "
    >
      {/* NAVIGATION */}

      <nav
        className="

        space-y-2

        flex-1

        "
      >
        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `

              flex

              items-center

              gap-3



              px-4

              py-3



              rounded-xl



              font-medium



              transition-all

              duration-300



              border

              border-transparent



              ${
                isActive
                  ? `

                bg-gradient-to-r

                from-[#0CA0C7]

                to-[#61D7E5]



                dark:from-[#111827]

                dark:to-[#0f172a]



                text-white



                dark:text-[#61D7E5]



                dark:border-[#0CA0C7]/40



                shadow-lg

                `
                  : `

                text-slate-600



                dark:text-white/70



                hover:bg-[#61D7E5]/20



                hover:text-[#0CA0C7]



                dark:hover:bg-white/10



                dark:hover:text-[#61D7E5]

                `
              }


              `
            }
          >
            {item.icon}

            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      {/* AI STATUS */}

      <div
        className="

        mt-6

        p-4

        rounded-2xl



        bg-[#61D7E5]/10



        dark:bg-white/10



        border

        border-[#61D7E5]/30



        dark:border-white/10



        backdrop-blur-xl

        "
      >
        <div
          className="

          flex

          items-center

          gap-2

          mb-2

          "
        >
          <Brain size={20} className="text-[#0CA0C7] dark:text-[#61D7E5]" />

          <span
            className="

            font-semibold

            text-slate-700

            dark:text-white

            "
          >
            AI Matching
          </span>
        </div>

        <p
          className="

          text-sm

          text-slate-500

          dark:text-white/60

          "
        >
          Semantic Matching Engine Active
        </p>

        <div
          className="

          flex

          items-center

          gap-2

          mt-3

          "
        >
          <ShieldCheck
            size={18}
            className="text-[#0CA0C7] dark:text-[#61D7E5]"
          />

          <span
            className="

            text-sm

            font-bold

            text-[#0CA0C7]

            dark:text-[#61D7E5]

            "
          >
            94% Accuracy
          </span>
        </div>
      </div>

      {/* PROFILE */}

      <div
        className="

        mt-5

        flex

        items-center

        gap-3

        p-3

        rounded-xl



        hover:bg-[#61D7E5]/10



        dark:hover:bg-white/10



        transition

        "
      >
        <div
          className="

          w-11

          h-11

          rounded-full

          overflow-hidden

          shadow-lg

          flex

          items-center

          justify-center

          "
        >
          <img
            src={zahraImage}
            alt="Zahra Kakkar"
            className="

            w-full

            h-full

            object-cover

            object-center

            "
          />
        </div>

        <div>
          <p
            className="

            text-sm

            font-semibold

            text-slate-700

            dark:text-white

            "
          >
            Zahra & Kakkar
          </p>

          <p
            className="

            text-xs

            text-slate-500

            dark:text-white/60

            "
          >
            Admin Account
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
