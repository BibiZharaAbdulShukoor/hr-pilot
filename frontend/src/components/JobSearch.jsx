import { Search, X } from "lucide-react";

export default function JobSearch({ search, setSearch, filter, setFilter }) {
  return (
    <div
      className="

      bg-gradient-to-br

      from-white

      to-cyan-50



      dark:bg-gradient-to-br

      dark:from-[#111827]

      dark:via-[#0f172a]

      dark:to-[#020617]



      rounded-[2rem]

      shadow-xl



      border

      border-white/60

      dark:border-slate-700



      p-6



      transition-all

      duration-700

      "
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {/* SEARCH */}

        <div className="relative">
          <Search
            size={20}
            className="

            absolute

            left-5

            top-1/2

            -translate-y-1/2



            text-slate-400

            dark:text-[#61D7E5]

            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search jobs..."
            className="

            w-full



            pl-14

            pr-14

            py-4



            rounded-2xl



            border



            border-slate-200

            dark:border-slate-700



            bg-white

            dark:bg-[#111827]



            text-slate-700

            dark:text-white



            placeholder:text-slate-400

            dark:placeholder:text-slate-500



            outline-none



            focus:ring-2

            focus:ring-[#0CA0C7]



            transition-all

            duration-500

            "
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="

              absolute

              right-5

              top-1/2

              -translate-y-1/2



              text-slate-400

              dark:text-slate-500



              hover:text-red-500



              transition

              "
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* FILTER */}

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="

          rounded-2xl



          border



          border-slate-200

          dark:border-slate-700



          px-5

          py-4



          outline-none



          bg-white

          dark:bg-[#111827]



          text-slate-700

          dark:text-[#61D7E5]



          focus:ring-2

          focus:ring-[#0CA0C7]



          transition-all

          duration-500

          "
        >
          <option value="All" className="bg-white dark:bg-[#111827]">
            All Jobs
          </option>

          <option value="Active" className="bg-white dark:bg-[#111827]">
            Active
          </option>

          <option value="Closed" className="bg-white dark:bg-[#111827]">
            Closed
          </option>
        </select>
      </div>
    </div>
  );
}
