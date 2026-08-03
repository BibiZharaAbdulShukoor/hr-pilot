import { useEffect, useState } from "react";

import {
  Bell,
  CheckCircle,
  Clock,
  Sparkles,
  AlertCircle,
  Trash2,
} from "lucide-react";

import { getNotifications } from "../api/dashboardApi";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
    try {
      const res = await getNotifications();

      setNotifications(res.data.data || []);
    } catch (error) {
      console.log(error);

      setNotifications([]);
    }
  }

  function getTime(date) {
    if (!date) return "";

    return new Date(date).toLocaleString();
  }

  // فقط حذف از صفحه (Frontend)
  function handleDeleteNotification(id) {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div
      className="
      space-y-10
      min-h-screen
      p-4
      bg-[#f1f5f9]
      dark:bg-[#0f172a]
      transition-colors
      duration-500
      "
    >
      {/* HERO */}

      <section
        className="
        relative
        overflow-hidden
        rounded-[2rem]
        p-10
        shadow-2xl

        bg-gradient-to-br
        from-[#0CA0C7]
        via-[#38BDF8]
        to-[#61D7E5]

        dark:from-[#111827]
        dark:via-[#0f172a]
        dark:to-[#020617]

        text-white

        border
        border-white/50
        dark:border-slate-700
        "
      >
        <div
          className="
          absolute
          w-80
          h-80
          rounded-full
          bg-white/30
          dark:bg-[#0CA0C7]/20
          blur-3xl
          right-[-100px]
          top-[-100px]
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
            <Bell size={45} className="text-white" />
          </div>

          <div>
            <h1
              className="
              text-5xl
              font-black
              "
            >
              Notifications
            </h1>

            <p
              className="
              mt-3
              text-white/80
              "
            >
              Stay updated with your AI recruitment activities.
            </p>
          </div>
        </div>
      </section>

      {/* LIST */}

      <div
        className="
        max-h-[650px]
        overflow-y-auto
        pr-2
        space-y-6
        scrollbar-thin
        scrollbar-thumb-[#0CA0C7]
        dark:scrollbar-thumb-[#61D7E5]
        "
      >
        {notifications.length === 0 ? (
          <div
            className="
            rounded-[2rem]
            p-10
            text-center
            bg-white
            dark:bg-[#111827]
            border
            border-slate-200
            dark:border-slate-700
            shadow-xl
            "
          >
            <Bell
              size={45}
              className="
              mx-auto
              mb-4
              text-[#0CA0C7]
              dark:text-[#61D7E5]
              "
            />

            <p
              className="
              font-black
              text-slate-700
              dark:text-white
              "
            >
              No notifications yet
            </p>
          </div>
        ) : (
          notifications.map((item) => (
            <div
              key={item.id}
              className="
              relative
              overflow-hidden
              rounded-[2rem]
              p-6

              bg-gradient-to-br
              from-white
              via-cyan-50
              to-white

              dark:from-[#111827]
              dark:via-[#0f172a]
              dark:to-[#020617]

              border
              border-white/50
              dark:border-slate-700

              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-1
              "
            >
              <div
                className="
                absolute
                w-40
                h-40
                rounded-full
                bg-[#61D7E5]/20
                dark:bg-[#0CA0C7]/10
                blur-3xl
                right-[-50px]
                top-[-50px]
                "
              />

              <div
                className="
                relative
                flex
                items-start
                gap-5
                "
              >
                <div
                  className="
                  p-4
                  rounded-2xl

                  bg-[#0CA0C7]/10
                  dark:bg-[#0CA0C7]/20

                  text-[#0CA0C7]
                  dark:text-[#61D7E5]

                  shadow-lg
                  "
                >
                  {item.type === "success" ? (
                    <CheckCircle size={28} />
                  ) : item.type === "ai" ? (
                    <Sparkles size={28} />
                  ) : (
                    <AlertCircle size={28} />
                  )}
                </div>

                <div className="flex-1">
                  <div
                    className="
                    flex
                    justify-between
                    items-start
                    gap-4
                    "
                  >
                    <h2
                      className="
                      text-xl
                      font-black
                      text-slate-800
                      dark:text-white
                      "
                    >
                      {item.title}
                    </h2>

                    <button
                      onClick={() => handleDeleteNotification(item.id)}
                      className="
                      p-2
                      rounded-xl

                      bg-red-100
                      text-red-600

                      dark:bg-red-500/20
                      dark:text-red-300

                      hover:scale-110
                      transition
                      "
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <p
                    className="
                    mt-2
                    leading-7
                    text-slate-600
                    dark:text-slate-300
                    "
                  >
                    {item.message}
                  </p>

                  <div
                    className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    dark:text-white/60
                    "
                  >
                    <Clock size={15} />

                    {getTime(item.created_at)}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
