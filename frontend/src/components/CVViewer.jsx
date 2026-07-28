import { FileText } from "lucide-react";

export default function CVViewer({ url }) {
  return (
    <div
      className="
bg-white
rounded-3xl
shadow-xl
border
p-6
"
    >
      <div
        className="
flex
items-center
gap-3
mb-5
"
      >
        <FileText
          className="
text-indigo-600
"
        />

        <h2
          className="
text-2xl
font-black
"
        >
          CV Preview
        </h2>
      </div>

      <iframe
        src={url}
        className="
w-full
h-[600px]
rounded-2xl
border
"
        title="CV"
      />
    </div>
  );
}
