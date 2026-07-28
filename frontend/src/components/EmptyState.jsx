import { Users } from "lucide-react";

function EmptyState() {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      shadow-sm
      border
      py-20
      text-center
      "
    >
      <Users size={60} className="mx-auto text-indigo-500" />

      <h2
        className="
        mt-6
        text-2xl
        font-bold
        "
      >
        No Candidates Found
      </h2>

      <p className="text-gray-500 mt-2">
        Upload your first CV to start matching.
      </p>
    </div>
  );
}

export default EmptyState;
