function StatCard({ title, value, icon, color }) {
  return (
    <div
      className="
bg-white
rounded-3xl
shadow-sm
border
p-6
hover:shadow-lg
transition
"
    >
      <div
        className="
flex
justify-between
items-center
"
      >
        <div>
          <p
            className="
text-gray-500
text-sm
"
          >
            {title}
          </p>

          <h2
            className="
text-4xl
font-bold
mt-3
text-gray-800
"
          >
            {value}
          </h2>
        </div>

        <div
          className={`
w-14
h-14
rounded-2xl
flex
items-center
justify-center
${color}
`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;
