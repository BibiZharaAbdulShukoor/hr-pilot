import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";


const data = [
  {
    month: "Jan",
    hires: 12,
  },
  {
    month: "Feb",
    hires: 18,
  },
  {
    month: "Mar",
    hires: 25,
  },
  {
    month: "Apr",
    hires: 20,
  },
  {
    month: "May",
    hires: 35,
  },
  {
    month: "Jun",
    hires: 42,
  },
];



export default function HiringChart() {


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



      <h2

        className="

        text-xl

        font-black

        mb-6



        text-slate-700


        dark:text-[#0CA0C7]



        transition-colors

        duration-500


        "

      >

        Hiring Analytics


      </h2>







      <div

        className="

        h-72

        "

      >



        <ResponsiveContainer width="100%" height="100%">


          <LineChart data={data}>


            <CartesianGrid

              strokeDasharray="3 3"

              stroke="#94a3b8"

              opacity={0.3}

            />



            <XAxis

              dataKey="month"

              stroke="#64748b"

            />



            <YAxis

              stroke="#64748b"

            />



            <Tooltip

              contentStyle={{

                backgroundColor:"#111827",

                borderRadius:"12px",

                border:"1px solid #334155",

                color:"#61D7E5"

              }}

            />



            <Line

              type="monotone"

              dataKey="hires"

              stroke="#0CA0C7"

              strokeWidth={4}

              dot={{

                fill:"#61D7E5",

                strokeWidth:2

              }}

            />


          </LineChart>


        </ResponsiveContainer>



      </div>




    </div>


  );


}