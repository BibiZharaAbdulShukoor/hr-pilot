import { useState } from "react";
import { NotebookPen, Save, Trash2 } from "lucide-react";


export default function NotesWidget() {


  const [note,setNote] = useState("");

  const [savedNotes,setSavedNotes] = useState([
    "Review AI matched candidates",
    "Prepare interview schedule",
  ]);




  function saveNote(){

    if(!note.trim()) return;


    setSavedNotes([
      ...savedNotes,
      note
    ]);


    setNote("");

  }




  function deleteNote(index){

    const updated = savedNotes.filter(
      (_,i)=>i !== index
    );


    setSavedNotes(updated);

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

            <NotebookPen size={26}/>

          </div>





          <div>


            <h2

              className="

              text-xl

              font-black

              "

            >

              HR Notes

            </h2>




            <p

              className="

              text-sm

              text-white/80

              "

            >

              Save your recruitment notes

            </p>



          </div>




        </div>









        {/* INPUT */}





        <div

          className="

          bg-white/20

          dark:bg-white/10



          rounded-2xl



          p-4



          backdrop-blur-xl



          border

          border-white/20

          "

        >



          <textarea

            value={note}

            onChange={(e)=>setNote(e.target.value)}

            placeholder="Write a new note..."

            className="

            w-full

            bg-transparent

            outline-none



            placeholder:text-white/60



            text-white



            resize-none



            h-24

            "

          />





          <button

            onClick={saveNote}

            className="

            mt-3



            flex

            items-center

            gap-2



            bg-white



            dark:bg-[#020617]



            text-[#0CA0C7]



            px-5



            py-2



            rounded-xl



            font-black



            hover:scale-105



            transition-all



            duration-300

            "

          >

            <Save size={18}/>

            Save Note


          </button>



        </div>









        {/* SAVED NOTES */}




        <div

          className="

          mt-6

          space-y-3

          "

        >




          {savedNotes.map((item,index)=>(




            <div

              key={index}

              className="

              flex

              justify-between

              items-center



              bg-white/20



              dark:bg-white/10



              backdrop-blur-xl



              border

              border-white/20



              rounded-2xl



              p-4



              transition



              hover:bg-white/30

              "

            >






              <p

                className="

                text-sm

                font-semibold

                "

              >

                {item}

              </p>






              <button

                onClick={()=>deleteNote(index)}

                className="

                bg-white/20



                dark:bg-white/10



                p-2



                rounded-xl



                hover:bg-red-500/40



                transition

                "

              >

                <Trash2 size={17}/>


              </button>





            </div>




          ))}





        </div>





      </div>





    </div>


  );


}