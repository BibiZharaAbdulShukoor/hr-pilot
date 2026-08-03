export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Confirmation",
  message = "Are you sure you want to delete this item?",
}) {
  if (!isOpen) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/50
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
    "
    >
      <div
        className="
        w-[360px]
        rounded-3xl
        p-6
        bg-white
        dark:bg-gray-900
        shadow-2xl
      "
      >
        <h2
          className="
          text-xl
          font-black
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
          dark:text-slate-300
        "
        >
          {message}
        </p>

        <div
          className="
          flex
          gap-3
          mt-6
        "
        >
          <button
            onClick={onClose}
            className="
              flex-1
              h-11
              rounded-xl
              bg-gray-200
              dark:bg-gray-700
              font-bold
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
              flex-1
              h-11
              rounded-xl
              bg-red-600
              text-white
              font-bold
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
