import { Search } from "lucide-react";

function CandidateSearch({ value, onChange }) {
  return (
    <div
      className="
      relative
      "
    >
      {/* ICON */}

      <Search
        className="

        absolute

        left-5

        top-1/2

        -translate-y-1/2



        text-slate-400



        dark:text-white/50

        "
        size={22}
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search candidates..."
        className="


        w-full



        pl-14

        pr-5



        py-4





        rounded-[2rem]





        bg-gradient-to-br

        from-white

        via-cyan-50

        to-white





        dark:bg-gradient-to-br

        dark:from-[#111827]

        dark:via-[#0f172a]

        dark:to-[#020617]







        border

        border-white/60

        dark:border-slate-700





        shadow-xl





        text-slate-800

        dark:text-white





        placeholder:text-slate-400

        dark:placeholder:text-white/50





        outline-none





        transition-all

        duration-500





        focus:ring-2

        focus:ring-[#0CA0C7]





        "
      />
    </div>
  );
}

export default CandidateSearch;
