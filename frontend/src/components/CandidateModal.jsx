import { X, Mail, FileText, Sparkles, Save } from "lucide-react";
import { useState } from "react";

import { updateCandidate } from "../api/dashboardApi";

export default function CandidateModal({ candidate, onClose }) {
  const [status, setStatus] = useState(candidate?.status || "New");

  const [notes, setNotes] = useState(candidate?.notes || "");

  const [saving, setSaving] = useState(false);

  if (!candidate) return null;

  const statuses = [
    "New",
    "Reviewing",
    "Shortlisted",
    "Interview",
    "Hired",
    "Rejected",
  ];

  async function saveChanges() {
    try {
      setSaving(true);

      await updateCandidate(candidate.id, {
        status,
        notes,
      });

      alert("Candidate updated successfully");

      onClose();
    } catch (error) {
      console.log(error);

      alert("Update failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div
      className="
fixed
inset-0
bg-black/40
backdrop-blur-sm
flex
items-center
justify-center
z-50
p-5
"
    >
      <div
        className="
bg-white
rounded-3xl
w-full
max-w-2xl
shadow-2xl
p-8
relative
animate-in
"
      >
        <button
          onClick={onClose}
          className="
absolute
right-5
top-5
p-2
rounded-xl
hover:bg-gray-100
"
        >
          <X />
        </button>

        <div className="flex items-center gap-4">
          <div
            className="
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-indigo-500
to-purple-600
text-white
flex
items-center
justify-center
text-2xl
font-black
"
          >
            {candidate.name?.charAt(0)}
          </div>

          <div>
            <h2
              className="
text-3xl
font-black
"
            >
              {candidate.name}
            </h2>

            <div
              className="
flex
items-center
gap-2
text-gray-500
"
            >
              <Mail size={16} />

              {candidate.email}
            </div>
          </div>
        </div>

        <div
          className="
mt-8
grid
md:grid-cols-2
gap-5
"
        >
          <div
            className="
bg-indigo-50
rounded-2xl
p-5
"
          >
            <div
              className="
flex
items-center
gap-2
text-indigo-700
font-bold
"
            >
              <Sparkles size={20} />
              AI Score
            </div>

            <h3
              className="
text-4xl
font-black
mt-3
text-green-600
"
            >
              {candidate.score || 0}%
            </h3>
          </div>

          <div
            className="
bg-gray-50
rounded-2xl
p-5
"
          >
            <div className="flex gap-2 font-bold">
              <FileText />
              CV File
            </div>

            <p className="mt-3 text-gray-600">
              {candidate.cv_file || "No file"}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <label
            className="
font-bold
"
          >
            Hiring Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="
w-full
mt-2
border
rounded-2xl
p-4
outline-none
focus:ring-2
focus:ring-indigo-500
"
          >
            {statuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6">
          <label
            className="
font-bold
"
          >
            HR Notes
          </label>

          <textarea
            rows="5"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write recruiter notes..."
            className="
w-full
mt-2
border
rounded-2xl
p-4
resize-none
outline-none
focus:ring-2
focus:ring-indigo-500
"
          />
        </div>

        <button
          onClick={saveChanges}
          disabled={saving}
          className="
mt-8
w-full
flex
items-center
justify-center
gap-3
bg-gradient-to-r
from-indigo-600
to-purple-600
text-white
py-4
rounded-2xl
font-black
text-lg
hover:scale-[1.02]
transition
"
        >
          <Save />

          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
