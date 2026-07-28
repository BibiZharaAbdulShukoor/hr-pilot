import { CheckCircle, Clock, XCircle, UserRoundCheck } from "lucide-react";

export default function HiringStatus({ status, onChange }) {
  const options = [
    {
      name: "New",
      icon: <Clock />,
    },
    {
      name: "Reviewing",
      icon: <Clock />,
    },
    {
      name: "Shortlisted",
      icon: <UserRoundCheck />,
    },
    {
      name: "Hired",
      icon: <CheckCircle />,
    },
    {
      name: "Rejected",
      icon: <XCircle />,
    },
  ];

  return (
    <div className="space-y-2">
      <label
        className="
font-bold
text-gray-700
"
      >
        Hiring Status
      </label>

      <select
        value={status || "New"}
        onChange={(e) => onChange(e.target.value)}
        className="
w-full
border
rounded-xl
p-3
"
      >
        {options.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
