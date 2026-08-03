import { useState } from "react";
import { NotebookPen, Save, Trash2 } from "lucide-react";

export default function NotesWidget() {
  const [note, setNote] = useState("");

  const [savedNotes, setSavedNotes] = useState([
    "Review AI matched candidates",
    "Prepare interview schedule",
  ]);

  function saveNote() {
    if (!note.trim()) return;

    setSavedNotes([...savedNotes, note]);

    setNote("");
  }

  function deleteNote(index) {
    const updated = savedNotes.filter((_, i) => i !== index);

    setSavedNotes(updated);
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

        w-52

        h-52


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
            <NotebookPen
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
              text-xl

              font-black

              text-slate-800

              dark:text-white
              "
            >
              HR Notes
            </h2>

            <p
              className="
              text-sm

              text-slate-500

              dark:text-white/70
              "
            >
              Save your recruitment notes
            </p>
          </div>
        </div>

        {/* INPUT */}

        <div
          className="
          bg-white

          dark:bg-white/10


          rounded-2xl


          p-4


          backdrop-blur-xl


          border

          border-slate-200

          dark:border-white/20
          "
        >
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write a new note..."
            className="
            w-full

            bg-transparent

            outline-none


            placeholder:text-slate-400

            dark:placeholder:text-white/50


            text-slate-700

            dark:text-white


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



            bg-gradient-to-r

            from-[#0CA0C7]

            to-[#61D7E5]


            text-white



            px-5


            py-2



            rounded-xl



            font-black



            hover:scale-105



            transition-all



            duration-300
            "
          >
            <Save size={18} />
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
          {savedNotes.map((item, index) => (
            <div
              key={index}
              className="
              flex

              justify-between

              items-center



              bg-white



              dark:bg-white/10



              backdrop-blur-xl



              border

              border-slate-200

              dark:border-white/20



              rounded-2xl



              p-4



              transition-all



              hover:shadow-md
              "
            >
              <p
                className="
                text-sm

                font-semibold

                text-slate-700

                dark:text-white
                "
              >
                {item}
              </p>

              <button
                onClick={() => deleteNote(index)}
                className="
                bg-red-100


                dark:bg-white/10


                text-red-600


                dark:text-red-300



                p-2



                rounded-xl



                hover:bg-red-200



                dark:hover:bg-red-500/20



                transition
                "
              >
                <Trash2 size={17} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
