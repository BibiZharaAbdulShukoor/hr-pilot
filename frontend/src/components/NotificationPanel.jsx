import { useEffect, useState } from "react";

import { Bell, CheckCircle, AlertCircle, Sparkles, Trash2 } from "lucide-react";

import { getNotifications } from "../api/dashboardApi";

export default function NotificationPanel() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();

    const syncNotifications = () => {
      loadNotifications();
    };

    window.addEventListener("notificationDeleted", syncNotifications);

    return () => {
      window.removeEventListener("notificationDeleted", syncNotifications);
    };
  }, []);

  async function loadNotifications() {
    try {
      const res = await getNotifications();

      const deleted =
        JSON.parse(localStorage.getItem("deletedNotifications")) || [];

      const filtered = (res.data.data || []).filter(
        (item) => !deleted.includes(item.id),
      );

      setNotifications(filtered);
    } catch (error) {
      console.log(error);

      setNotifications([]);
    }
  }

  function handleDeleteNotification(id) {
    const deleted =
      JSON.parse(localStorage.getItem("deletedNotifications")) || [];

    localStorage.setItem(
      "deletedNotifications",
      JSON.stringify([...deleted, id]),
    );

    setNotifications((prev) => prev.filter((item) => item.id !== id));

    window.dispatchEvent(new Event("notificationDeleted"));
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

      from-white
      to-[#e6fbff]

      dark:from-[#111827]
      dark:via-[#0f172a]
      dark:to-[#020617]

      rounded-3xl

      shadow-2xl

      p-6

      text-slate-800

      dark:text-white

      border

      border-slate-200

      dark:border-slate-700

      transition-all

      duration-700
      "
    >
      {/* GLOW */}

      <div
        className="
        absolute

        w-60

        h-60

        right-[-60px]

        top-[-60px]

        rounded-full

        bg-[#61D7E5]/30

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
            bg-[#0CA0C7]/10

            dark:bg-white/10

            backdrop-blur-xl

            p-3

            rounded-2xl

            border

            border-[#0CA0C7]/20

            dark:border-white/20
            "
          >
            <Bell
              size={26}
              className="
              text-[#0CA0C7]
              dark:text-[#61D7E5]
              "
            />
          </div>

          <div>
            <h2
              className="
              text-2xl
              font-black
              text-slate-800
              dark:text-white
              "
            >
              Notifications
            </h2>

            <p
              className="
              text-sm
              text-slate-500
              dark:text-white/70
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
          "
        >
          {notifications.length === 0 ? (
            <div
              className="
              bg-white

              dark:bg-white/10

              backdrop-blur-xl

              rounded-2xl

              p-8

              text-center

              border

              border-slate-200

              dark:border-white/20
              "
            >
              <Bell
                size={40}
                className="
                mx-auto
                mb-3
                text-slate-400
                dark:text-white/60
                "
              />

              <p
                className="
                font-bold
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
                flex

                gap-4

                items-start

                p-4

                rounded-2xl

                bg-white

                dark:bg-white/10

                backdrop-blur-xl

                border

                border-slate-200

                dark:border-white/20

                hover:shadow-lg

                transition-all

                duration-300
                "
              >
                {/* ICON */}

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
                      ? "bg-emerald-500 text-white"
                      : item.type === "ai"
                        ? "bg-[#0CA0C7] text-white"
                        : item.type === "warning"
                          ? "bg-orange-400 text-white"
                          : "bg-blue-500 text-white"
                  }
                  `}
                >
                  {item.type === "success" ? (
                    <CheckCircle size={20} />
                  ) : item.type === "ai" ? (
                    <Sparkles size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                </div>

                {/* CONTENT */}

                <div
                  className="
                  flex-1
                  flex
                  justify-between
                  gap-3
                  "
                >
                  <div>
                    <h3
                      className="
                      font-black
                      text-slate-800
                      dark:text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      text-sm
                      text-slate-500
                      dark:text-white/70
                      mt-1
                      "
                    >
                      {item.message}
                    </p>

                    <span
                      className="
                      block
                      text-xs
                      text-slate-400
                      dark:text-white/50
                      mt-2
                      "
                    >
                      {getTime(item.created_at)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDeleteNotification(item.id)}
                    className="
                    h-9
                    w-9

                    flex
                    items-center
                    justify-center

                    rounded-xl

                    bg-red-100

                    text-red-600

                    dark:bg-red-500/20

                    dark:text-red-300

                    hover:scale-110

                    transition-all
                    "
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
