import {
  Mail,
  Phone,
  MapPin,
  Brain,
  Send,
} from "lucide-react";


export default function Contact() {


  return (

    <div

      className="

      min-h-screen

      p-8


      relative

      overflow-hidden



      dark:bg-gradient-to-br

      dark:from-[#111827]

      dark:via-[#0f172a]

      dark:to-[#020617]

      "

    >






      {/* HERO */}



      <section

        className="

        relative

        overflow-hidden



        bg-gradient-to-br

        from-[#0CA0C7]

        via-[#38BDF8]

        to-[#61D7E5]



        dark:bg-gradient-to-br

        dark:from-[#111827]

        dark:via-[#0f172a]

        dark:to-[#020617]



        rounded-[2rem]



        p-10



        text-white



        shadow-2xl



        border

        border-white/30

        dark:border-slate-700

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

            backdrop-blur-xl

            border

            border-white/20

            "

          >

            <Brain size={45}/>


          </div>






          <div>


            <h1

              className="

              text-5xl

              font-black

              "

            >

              Contact HR Pilot AI 🚀

            </h1>



            <p

              className="

              mt-3

              text-lg

              text-white/90

              "

            >

              Get in touch with our intelligent recruitment team

            </p>


          </div>


        </div>


      </section>










      {/* CONTACT CARDS */}





      <div

        className="

        grid

        md:grid-cols-3

        gap-6

        mt-10

        "

      >




        <ContactCard

          icon={<Mail size={35}/>}

          title="Email"

          text="support@hrpilot.ai"

        />




        <ContactCard

          icon={<Phone size={35}/>}

          title="Phone"

          text="+93 700 000 000"

        />




        <ContactCard

          icon={<MapPin size={35}/>}

          title="Location"

          text="Afghanistan"

        />




      </div>









      {/* MESSAGE */}





      <div

        className="

        relative

        overflow-hidden



        bg-gradient-to-br

        from-white

        via-cyan-50

        to-white



        dark:bg-gradient-to-br

        dark:from-[#111827]

        dark:via-[#0f172a]

        dark:to-[#020617]



        rounded-[2rem]



        p-8



        shadow-xl



        border

        border-white/60

        dark:border-slate-700



        mt-10

        "

      >




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





        <div className="relative z-10">


          <h2

            className="

            text-3xl

            font-black

            text-slate-800

            dark:text-white

            mb-6

            "

          >

            Send Message

          </h2>





          <input

            className="

            w-full

            p-4

            rounded-xl

            border

            border-slate-200

            bg-white

            text-slate-800


            dark:bg-white/10

            dark:border-white/10

            dark:text-white


            mb-4

            outline-none

            "

            placeholder="Your Name"

          />





          <input

            className="

            w-full

            p-4

            rounded-xl

            border

            border-slate-200

            bg-white

            text-slate-800


            dark:bg-white/10

            dark:border-white/10

            dark:text-white


            mb-4

            outline-none

            "

            placeholder="Your Email"

          />






          <textarea

            className="

            w-full

            p-4

            rounded-xl

            border

            border-slate-200

            bg-white

            text-slate-800


            dark:bg-white/10

            dark:border-white/10

            dark:text-white


            h-32

            outline-none

            "

            placeholder="Message"

          />







          <button

            className="

            mt-5

            px-8

            py-3

            rounded-xl



            bg-[#0CA0C7]

            dark:bg-gradient-to-r

            dark:from-[#0CA0C7]

            dark:to-[#61D7E5]



            text-white

            font-bold



            flex

            items-center

            gap-2



            hover:scale-105

            transition

            "

          >

            <Send size={18}/>

            Send Message


          </button>



        </div>




      </div>






    </div>

  );

}







function ContactCard({

  icon,

  title,

  text

}) {


  return (

    <div

      className="

      relative

      overflow-hidden



      bg-gradient-to-br

      from-white

      via-cyan-50

      to-white



      dark:bg-gradient-to-br

      dark:from-[#111827]

      dark:via-[#0f172a]

      dark:to-[#020617]



      rounded-[2rem]



      p-8



      shadow-xl



      border

      border-white/60

      dark:border-slate-700



      transition-all

      duration-700



      hover:-translate-y-2

      "

    >



      <div

        className="

        absolute

        w-32

        h-32

        right-[-40px]

        top-[-40px]

        rounded-full

        bg-[#61D7E5]/30

        dark:bg-[#0CA0C7]/20

        blur-3xl

        "

      />





      <div className="relative z-10">


        <div

          className="

          w-14

          h-14

          flex

          items-center

          justify-center



          rounded-2xl



          bg-[#0CA0C7]/10



          dark:bg-white/10



          text-[#0CA0C7]



          dark:text-[#61D7E5]



          border

          border-white/20

          "

        >

          {icon}


        </div>





        <h2

          className="

          text-2xl

          font-black

          mt-5



          text-slate-800



          dark:text-white

          "

        >

          {title}

        </h2>





        <p

          className="

          mt-3



          text-slate-600



          dark:text-white/70

          "

        >

          {text}

        </p>



      </div>



    </div>


  );

}