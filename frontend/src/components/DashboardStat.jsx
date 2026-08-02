export default function DashboardStat({ title, value, icon, gradient }) {
  return (
    <div
      className={`
      
      relative
      overflow-hidden

      rounded-[2rem]

      p-6

      text-white


      bg-gradient-to-br

      ${gradient}


      dark:bg-gradient-to-br

      dark:from-[#111827]

      dark:via-[#0f172a]

      dark:to-[#020617]



      border

      border-white/20

      dark:border-slate-700



      shadow-xl


      transition-all

      duration-500


      hover:-translate-y-2


      hover:shadow-2xl

      `}
    >
      {/* Animated Glow */}

      <div
        className="

        absolute

        w-40

        h-40


        rounded-full


        bg-[#61D7E5]/40


        dark:bg-[#0CA0C7]/30


        blur-3xl



        right-[-50px]


        top-[-50px]


        animate-float


        "
      />

      {/* Moving Light */}

      <div
        className="

        absolute

        inset-0


        bg-gradient-to-r

        from-transparent

        via-white/10

        to-transparent


        translate-x-[-100%]


        hover:translate-x-[100%]


        transition-transform

        duration-1000


        "
      />

      <div
        className="

        relative

        z-10

        "
      >
        {/* ICON AREA */}

        <div
          className="

          flex

          justify-between

          items-center

          "
        >
          <div
            className="

            p-4


            rounded-2xl


            bg-white/20


            dark:bg-white/10


            backdrop-blur-xl


            shadow-lg

            "
          >
            {icon}
          </div>

          <span
            className="

            px-3

            py-1


            rounded-full


            text-xs

            font-bold



            bg-white/20


            dark:bg-[#0CA0C7]/30


            "
          >
            AI
          </span>
        </div>

        {/* TITLE */}

        <h3
          className="

          mt-6


          text-white/80


          dark:text-slate-300


          font-semibold


          tracking-wide


          italic

          "
        >
          {title}
        </h3>

        {/* VALUE */}

        <p
          className="

          mt-2


          text-4xl


          font-black


          tracking-tight


          "
        >
          {value}
        </p>

        {/* BOTTOM LIGHT */}

        <div
          className="

          mt-5


          h-1


          rounded-full



          bg-white/30


          dark:bg-[#0CA0C7]/50


          "
        />
      </div>
    </div>
  );
}
