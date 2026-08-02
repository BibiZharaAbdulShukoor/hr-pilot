import { useEffect, useState } from "react";

import { Bell, CheckCircle, AlertCircle, Sparkles } from "lucide-react";

import { getNotifications } from "../api/dashboardApi";

export default function NotificationPanel() {
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
      {/* GLOW */}

      <div
        className="

        absolute

        w-44

        h-44

        right-[-50px]

        top-[-50px]



        rounded-full



        bg-white/30



        dark:bg-[#0CA0C7]/20



        blur-3xl



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
            <Bell size={26} />
          </div>

          <div>
            <h2
              className="

              text-xl

              font-black

              "
            >
              Notifications
            </h2>

            <p
              className="

              text-sm

              text-white/80

              "
            >
              Latest AI activities
            </p>
          </div>
        </div>

        {/* LIST */}

        <div
          className="
  space-y-4

  max-h-[420px]

  overflow-y-auto

  pr-2

  scrollbar-thin

  scrollbar-thumb-white/40

  scrollbar-track-transparent
  "
        >
          {notifications.length === 0 ? (
            <div
              className="

              bg-white/20

              dark:bg-white/10



              backdrop-blur-xl



              rounded-2xl



              p-8



              text-center



              border

              border-white/20

              "
            >
              <Bell
                size={40}
                className="

                mx-auto

                mb-3

                text-white/70

                "
              />

              <p className="font-bold">No notifications yet</p>

              <p
                className="

                text-sm

                text-white/70

                mt-2

                "
              >
                System notifications will appear here.
              </p>
            </div>
          ) : (
            notifications.map((item) => (
              <div
                key={item.id}
                className="

                flex

                gap-4

                items-start



                p-4



                rounded-2xl



                bg-white/20



                dark:bg-white/10



                backdrop-blur-xl



                border

                border-white/20



                hover:bg-white/30



                transition-all

                duration-300

                "
              >
                <div
                  className={`

                  w-11

                  h-11

                  rounded-xl

                  flex

                  items-center

                  justify-center



                  ${
                    item.type === "success"
                      ? "bg-emerald-400 text-white"
                      : item.type === "ai"
                        ? "bg-[#61D7E5] text-white"
                        : item.type === "warning"
                          ? "bg-orange-400 text-white"
                          : "bg-blue-400 text-white"
                  }


                  `}
                >
                  {item.type === "success" ? (
                    <CheckCircle size={22} />
                  ) : item.type === "ai" ? (
                    <Sparkles size={22} />
                  ) : (
                    <AlertCircle size={22} />
                  )}
                </div>

                <div className="flex-1">
                  <h3
                    className="

                    font-black

                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="

                    text-sm

                    text-white/80

                    mt-1

                    "
                  >
                    {item.message}
                  </p>

                  <span
                    className="

                    block

                    text-xs

                    text-white/60

                    mt-2

                    "
                  >
                    {getTime(item.created_at)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
