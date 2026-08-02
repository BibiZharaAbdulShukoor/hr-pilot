import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Mail, Lock, LogIn, ArrowLeft, Brain } from "lucide-react";

import { useAuth } from "../context/AuthContext";
import { loginUser } from "../api/auth";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    setError("");

    if (!email || !password) {
      setError("Email and password are required");

      setLoading(false);

      return;
    }

    try {
      const res = await loginUser({
        email,

        password,
      });

      login(
        res.data.user,

        res.data.token,
      );

      navigate("/dashboard");
    } catch (err) {
      console.log(err);

      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="

min-h-screen

flex

items-center

justify-center


relative

overflow-hidden



bg-gradient-to-br

from-[#e6fbff]

via-white

to-[#61D7E5]/30



dark:from-[#020617]

dark:via-[#0f172a]

dark:to-[#020617]



px-4

"
    >
      {/* BACKGROUND GLOW */}

      <div
        className="

absolute

-top-40

-left-40

w-[400px]

h-[400px]

rounded-full

bg-[#61D7E5]/30

blur-[120px]

"
      />

      <div
        className="

absolute

-bottom-40

-right-40

w-[400px]

h-[400px]

rounded-full

bg-[#0CA0C7]/30

blur-[120px]

"
      />

      {/* BACK BUTTON */}

      <button
        onClick={() => navigate("/")}
        className="

absolute

top-8

left-8


flex

items-center

gap-2


px-5

py-3


rounded-xl


bg-white/70

dark:bg-white/10


border

border-[#61D7E5]/30


text-[#0CA0C7]


font-semibold


backdrop-blur-xl


hover:scale-105


transition

"
      >
        <ArrowLeft size={18} />
        Back Home
      </button>

      <form
        onSubmit={handleSubmit}
        className="


relative


w-full

max-w-md



bg-white/80


dark:bg-white/10



backdrop-blur-xl



border

border-[#61D7E5]/30



rounded-[2rem]



shadow-2xl



p-10



"
      >
        {/* LOGO */}

        <div
          className="

flex

justify-center

mb-5

"
        >
          <div
            className="

w-16

h-16

rounded-2xl


bg-gradient-to-br

from-[#0CA0C7]

to-[#61D7E5]


flex

items-center

justify-center


shadow-lg

"
          >
            <Brain size={35} className="text-white" />
          </div>
        </div>

        <h1
          className="

text-3xl

font-black

text-center


text-slate-800

dark:text-white


"
        >
          HR Pilot Login
        </h1>

        <p
          className="

text-center

mt-2

text-slate-500

dark:text-white/60

mb-8

"
        >
          Sign in to your AI recruitment platform
        </p>

        {error && (
          <div
            className="

bg-red-100

text-red-600

rounded-xl

p-3

mb-5

text-sm

"
          >
            {error}
          </div>
        )}

        {/* EMAIL */}

        <div className="mb-5">
          <label
            className="

font-bold

text-slate-700

dark:text-white

"
          >
            Email
          </label>

          <div
            className="

relative

mt-2

"
          >
            <Mail
              className="

absolute

left-4

top-4

text-gray-400

"
              size={20}
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              className="

w-full

rounded-xl

p-4

pl-12


border

border-gray-200


dark:border-white/20


dark:bg-white/10


outline-none


focus:ring-2

focus:ring-[#0CA0C7]

"
            />
          </div>
        </div>

        {/* PASSWORD */}

        <div className="mb-8">
          <label
            className="

font-bold

text-slate-700

dark:text-white

"
          >
            Password
          </label>

          <div
            className="

relative

mt-2

"
          >
            <Lock
              className="

absolute

left-4

top-4

text-gray-400

"
              size={20}
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="

w-full

rounded-xl

p-4

pl-12


border

border-gray-200


dark:border-white/20


dark:bg-white/10


outline-none


focus:ring-2

focus:ring-[#0CA0C7]

"
            />
          </div>
        </div>

        <button
          disabled={loading}
          className="

w-full


bg-gradient-to-r

from-[#0CA0C7]

to-[#61D7E5]


text-white


rounded-xl


py-4


font-bold


flex

justify-center

items-center

gap-2


shadow-lg


hover:scale-105


transition


disabled:opacity-50

"
        >
          <LogIn size={20} />

          {loading ? "Signing In..." : "Login"}
        </button>

        <p
          className="

text-center

mt-6

text-slate-600

dark:text-white/70

"
        >
          Don't have an account?
          <Link
            to="/register"
            className="

ml-2

font-bold

text-[#0CA0C7]

"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
