export default function ProgressBar({ progress }) {
  return (
    <div className="w-full mt-5">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-gray-700">Uploading CV</span>

        <span className="font-bold text-indigo-600">{progress}%</span>
      </div>

      <div
        className="
        w-full
        h-3
        bg-gray-200
        rounded-full
        overflow-hidden
        "
      >
        <div
          className="
          h-full
          bg-gradient-to-r
          from-indigo-600
          via-purple-600
          to-pink-600
          transition-all
          duration-300
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}
