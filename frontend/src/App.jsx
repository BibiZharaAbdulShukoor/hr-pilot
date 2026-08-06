import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import Jobs from "./Pages/Jobs";
import UploadCandidate from "./Pages/UploadCandidate";
import Candidates from "./Pages/Candidates";
import CreateJob from "./Pages/CreateJob";
import JobDetails from "./Pages/JobDetails";
import CandidateDetails from "./Pages/CandidateDetails";
import AIMatching from "./Pages/AIMatching";
import JobMatching from "./Pages/JobMatching";
import EditJob from "./Pages/EditJob";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Notifications from "./Pages/Notification";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}

        <Route path="/" element={<Landing />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* PUBLIC INFORMATION PAGES */}

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        {/* PROTECTED ROUTES */}

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/jobs" element={<Jobs />} />

          <Route path="/create-job" element={<CreateJob />} />

          <Route path="/jobs/edit/:id" element={<EditJob />} />

          <Route path="/jobs/:id" element={<JobDetails />} />

          <Route path="/upload-candidate" element={<UploadCandidate />} />

          <Route path="/upload" element={<UploadCandidate />} />

          <Route path="/ai-matching" element={<AIMatching />} />

          <Route path="/candidates" element={<Candidates />} />

          <Route path="/candidate/:id" element={<CandidateDetails />} />

          <Route path="/matching/:id" element={<JobMatching />} />

          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
