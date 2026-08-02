import { useEffect, useState } from "react";

import {
  Users,
  BriefcaseBusiness,
  Sparkles,
  UserCheck,
  Brain,
} from "lucide-react";

import { getDashboardStats } from "../api/dashboardApi";

import DashboardStat from "../components/DashboardStat";
import HiringChart from "../components/HiringChart";
import CalendarWidget from "../components/CalendarWidget";
import NotesWidget from "../components/NotesWidget";
import TopCandidates from "../components/TopCandidates";
import NotificationPanel from "../components/NotificationPanel";
import RecentCandidates from "../components/RecentCandidates";
import RecentJobs from "../components/RecentJobs";
import InsightCard from "../components/InsightCard";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalCandidates: 0,
    totalJobs: 0,
    aiAccuracy: 0,
    hiringRate: 0,
    topCandidates: [],
    recentCandidates: [],
    recentJobs: [],
  });

  useEffect(() => {
    async function loadDashboard() {
      try {
        const res = await getDashboardStats();

        console.log("Dashboard Data:", res.data);

        setDashboardData(res.data.data);
      } catch (error) {
        console.log("Dashboard Error:", error);
      }
    }

    loadDashboard();
  }, []);

  return (
    <div
      className="

      min-h-screen

      p-4

      space-y-10

      relative

      overflow-hidden


      bg-[#f1f5f9]

      dark:bg-[#0f172a]


      transition-colors

      duration-500

      "
    >
      {/* AI BACKGROUND LIGHT */}

      <div
        className="

        absolute

        top-[-200px]

        left-[-150px]


        w-[500px]

        h-[500px]


        rounded-full


        bg-[#61D7E5]/40

        dark:bg-[#61D7E5]/20


        blur-[120px]


        animate-float

        "
      />

      <div
        className="

        absolute

        bottom-[-200px]

        right-[-150px]


        w-[500px]

        h-[500px]


        rounded-full


        bg-[#0CA0C7]/40

        dark:bg-[#0CA0C7]/20


        blur-[120px]


        animate-float


        "
      />

      {/* HERO */}

      <section
        className="
  relative

  overflow-hidden

  rounded-[2.5rem]

  p-10

  text-white


  shadow-2xl



  bg-gradient-to-br

  from-[#0CA0C7]

  to-[#61D7E5]



  dark:from-[#111827]

  dark:via-[#0f172a]

  dark:to-[#020617]



  border

  border-white/20

  dark:border-slate-700



  transition-all

  duration-700



  animate-fadeIn

  "
      >
        {/* MOVING LIGHT */}

        <div
          className="

    absolute

    w-[450px]

    h-[450px]

    rounded-full


    bg-white/30


    dark:bg-[#0CA0C7]/20


    blur-3xl


    right-[-150px]


    top-[-150px]


    animate-float


    "
        />

        <div
          className="

    absolute

    w-72

    h-72


    rounded-full


    bg-[#61D7E5]/40


    dark:bg-[#61D7E5]/10


    blur-3xl


    left-[-100px]


    bottom-[-100px]


    animate-float


    "
        />

        <div
          className="

    relative

    flex

    items-center

    gap-6

    "
        >
          <div
            className="

      p-6


      rounded-3xl


      bg-white/20


      dark:bg-white/10


      backdrop-blur-xl


      shadow-xl


      border

      border-white/20


      "
          >
            <Brain size={50} />
          </div>

          <div>
            <h1
              className="

        text-5xl

        font-black

        italic

        tracking-tight


        "
            >
              HR Pilot AI 🚀
            </h1>

            <p
              className="

        mt-4

        text-lg

        italic


        text-white/90


        dark:text-slate-300


        "
            >
              Intelligent AI recruitment dashboard powered by semantic matching
            </p>
          </div>
        </div>
      </section>

      {/* STAT CARDS */}

      <div
        className="

        grid

        md:grid-cols-4

        gap-6

        relative

        z-10

        "
      >
        <DashboardStat
          title="Candidates"
          value={dashboardData.totalCandidates}
          icon={<Users size={35} />}
          gradient="bg-[#0CA0C7]"
        />

        <DashboardStat
          title="Active Jobs"
          value={dashboardData.totalJobs}
          icon={<BriefcaseBusiness size={35} />}
          gradient="bg-[#0AB2CF]"
        />

        <DashboardStat
          title="AI Accuracy"
          value={`${dashboardData.aiAccuracy}%`}
          icon={<Sparkles size={35} />}
          gradient="bg-[#61D7E5]"
        />

        <DashboardStat
          title="Hiring Rate"
          value={`${dashboardData.hiringRate}%`}
          icon={<UserCheck size={35} />}
          gradient="bg-[#0CA0C7]"
        />
      </div>

      {/* ANALYTICS */}

      <div
        className="

        grid

        xl:grid-cols-3

        gap-8

        relative

        z-10

        "
      >
        <div
          className="

          xl:col-span-2


          rounded-3xl


          bg-white/60

          dark:bg-[#0f172a]/60


          backdrop-blur-xl


          border

          border-white/40

          dark:border-slate-700


          shadow-xl


          p-5


          transition-all

          duration-500


          hover:-translate-y-1

          "
        >
          <HiringChart />
        </div>

        <div
          className="

          rounded-3xl


          bg-white/60

          dark:bg-[#0f172a]/60


          backdrop-blur-xl


          border

          border-white/40

          dark:border-slate-700


          shadow-xl


          transition-all

          duration-500


          hover:-translate-y-1

          "
        >
          <CalendarWidget />
        </div>
      </div>

      {/* AI SECTION */}

      <div
        className="
  flex

  flex-col

  gap-8

  relative

  z-10
  "
      >
        <TopCandidates candidates={dashboardData.topCandidates} />

        <InsightCard data={dashboardData} />

        <NotificationPanel />

        <NotesWidget />
      </div>
      {/* RECENT */}

      <div
        className="

        grid

        lg:grid-cols-2

        gap-8

        relative

        z-10

        "
      >
        <RecentCandidates candidates={dashboardData.recentCandidates} />

        <RecentJobs jobs={dashboardData.recentJobs} />
      </div>
    </div>
  );
}
