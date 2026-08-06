import {
  User,
  Mail,
  ShieldCheck,
  Briefcase,
  Users,
  Sparkles,
  LogOut,
  Edit,
  Save,
  Camera,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Profile() {
  const { user, logout, updateUser } = useAuth();

  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",

    phone: user?.phone || "",

    location: user?.location || "",

    bio: user?.bio || "",

    image: user?.image || "",
  });

  function handleLogout() {
    logout();

    navigate("/login");
  }

  function handleChange(e) {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  }

  function handleImage(e) {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,

        image: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  function saveProfile() {
    updateUser(formData);

    setEditing(false);
  }

  function getInitials() {
    if (!user?.name) return "U";

    const words = user.name.split(" ");

    if (words.length === 1) return words[0][0].toUpperCase();

    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}

      <section
        className="
relative
overflow-hidden
rounded-[2rem]

bg-gradient-to-br
from-[#0CA0C7]
to-[#61D7E5]

dark:from-[#111827]
dark:via-[#0f172a]
dark:to-[#020617]

p-10
text-white
shadow-2xl
"
      >
        <div className="flex items-center gap-6">
          <div
            className="
relative
w-32
h-32
rounded-full

bg-white/20

border
border-white/30

flex
items-center
justify-center

overflow-hidden

text-4xl
font-black
"
          >
            {formData.image ? (
              <img
                src={formData.image}
                className="
w-full
h-full
object-cover
"
              />
            ) : (
              getInitials()
            )}
          </div>

          <div>
            <h1 className="text-4xl font-black">{user?.name || "User"}</h1>

            <p className="mt-2 flex gap-2 items-center">
              <Mail size={18} />

              {user?.email}
            </p>

            <p className="mt-2 flex gap-2 items-center">
              <ShieldCheck size={18} />
              Recruiter Account
            </p>
          </div>
        </div>
      </section>

      <section
        className="
grid
md:grid-cols-2
gap-6
"
      >
        <div
          className="
bg-white
dark:bg-white/10

rounded-3xl

p-8

shadow-xl

border
border-cyan-100

dark:border-white/10
"
        >
          <h2
            className="
text-2xl
font-black
dark:text-white
"
          >
            Personal Information
          </h2>

          {editing ? (
            <div className="mt-6 space-y-4">
              <label
                className="
flex
items-center
gap-2
cursor-pointer
text-[#0CA0C7]
font-bold
"
              >
                <Camera size={20} />
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImage}
                />
              </label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="
w-full
p-3
rounded-xl

bg-slate-100

dark:bg-white/10

dark:text-white
"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="
w-full
p-3
rounded-xl
bg-slate-100
dark:bg-white/10
dark:text-white
"
              />

              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="
w-full
p-3
rounded-xl
bg-slate-100
dark:bg-white/10
dark:text-white
"
              />

              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Bio"
                className="
w-full
p-3
rounded-xl
bg-slate-100
dark:bg-white/10
dark:text-white
"
              />

              <button
                onClick={saveProfile}
                className="
  w-full

  py-3

  rounded-xl


  bg-gradient-to-r

  from-[#0CA0C7]

  to-[#61D7E5]


  dark:from-[#111827]

  dark:via-[#0f172a]

  dark:to-[#020617]


  dark:border

  dark:border-[#61D7E5]/30


  text-white


  font-bold


  flex

  justify-center

  items-center

  gap-2


  shadow-lg


  transition-all

  duration-300


  hover:scale-105

  "
              >
                <Save size={18} />
                Save Changes
              </button>
            </div>
          ) : (
            <div
              className="
mt-6
space-y-4
dark:text-white/70
"
            >
              <p>
                Name:
                <span className="font-bold ml-2 dark:text-white">
                  {user?.name}
                </span>
              </p>

              <p>
                Email:
                <span className="font-bold ml-2 dark:text-white">
                  {user?.email}
                </span>
              </p>

              <p>
                Phone:
                <span className="font-bold ml-2 dark:text-white">
                  {user?.phone || "Not added"}
                </span>
              </p>

              <p>
                Location:
                <span className="font-bold ml-2 dark:text-white">
                  {user?.location || "Not added"}
                </span>
              </p>
            </div>
          )}

          <button
            onClick={() => setEditing(!editing)}
            className="
mt-8
flex
items-center
gap-2
px-6
py-3
rounded-2xl

bg-gradient-to-r

from-[#0CA0C7]
to-[#61D7E5]

dark:from-[#111827]
dark:via-[#0f172a]
dark:to-[#020617]

text-white
font-bold
shadow-lg
"
          >
            <Edit size={18} />

            {editing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        <div className="grid gap-5">
          <StatCard icon={<Briefcase />} title="Jobs Created" value="25" />

          <StatCard icon={<Users />} title="Candidates" value="120" />

          <StatCard icon={<Sparkles />} title="AI Matches" value="350" />
        </div>
      </section>

      <button
        onClick={handleLogout}
        className="
flex
items-center
justify-center
gap-3

w-full
py-4
rounded-2xl

bg-red-500

dark:bg-red-500/20

dark:border
dark:border-red-400/30

text-white

font-black

shadow-lg
"
      >
        <LogOut size={20} />
        Logout
      </button>
    </div>
  );
}

function StatCard({ icon, title, value }) {
  return (
    <div
      className="
bg-white
dark:bg-white/10

rounded-3xl
p-6

shadow-xl

border
border-cyan-100

dark:border-white/10

flex
items-center
gap-5
"
    >
      <div
        className="
text-[#0CA0C7]
dark:text-[#61D7E5]
"
      >
        {icon}
      </div>

      <div>
        <h3
          className="
text-3xl
font-black
dark:text-white
"
        >
          {value}
        </h3>

        <p
          className="
text-slate-500
dark:text-white/60
"
        >
          {title}
        </p>
      </div>
    </div>
  );
}
