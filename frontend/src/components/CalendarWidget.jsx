import { CalendarDays } from "lucide-react";


export default function CalendarWidget() {


  const today = new Date();



  return (


    <div

      className="

      rounded-3xl


      bg-white/60

      dark:bg-[#111827]/80



      backdrop-blur-xl



      border

      border-white/40

      dark:border-slate-700



      shadow-xl



      p-6



      transition-all

      duration-500


      "

    >





      <div

        className="

        flex

        items-center

        gap-3

        mb-5

        "

      >



        <CalendarDays

          className="

          text-[#0CA0C7]

          "

        />





        <h2

          className="

          text-xl

          font-black



          text-slate-700


          dark:text-[#0CA0C7]



          transition-colors

          duration-500


          "

        >

          HR Calendar


        </h2>



      </div>









      <div

        className="

        bg-[#61D7E5]/10


        dark:bg-white/5



        rounded-2xl


        p-5



        border

        border-[#61D7E5]/20



        "

      >



        <p

          className="

          text-slate-500

          dark:text-slate-400

          "

        >

          Today


        </p>





        <h3

          className="

          text-3xl

          font-black



          text-[#0CA0C7]



          "

        >

          {today.toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
          })}


        </h3>



      </div>









      <div

        className="

        mt-5

        space-y-3

        "

      >



        <div

          className="

          p-4

          rounded-xl



          bg-green-50

          dark:bg-green-500/10



          text-green-700

          dark:text-green-400



          font-semibold



          border

          border-green-200

          dark:border-green-500/20



          transition-all

          duration-500


          "

        >

          10:00 Interview - React Developer


        </div>







        <div

          className="

          p-4

          rounded-xl



          bg-purple-50

          dark:bg-purple-500/10



          text-purple-700

          dark:text-purple-400



          font-semibold



          border

          border-purple-200

          dark:border-purple-500/20



          transition-all

          duration-500


          "

        >

          14:00 Review Candidates


        </div>





      </div>




    </div>


  );

}