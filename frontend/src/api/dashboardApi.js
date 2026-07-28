import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// =====================
// Candidates
// =====================

export const getCandidates = () => {
  return API.get("/candidates");
};

export const getCandidateById = (id) => {
  return API.get(`/candidates/${id}`);
};

export const uploadCandidateCV = (formData, config) => {
  return API.post("/candidates/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    ...config,
  });
};

export const deleteCandidate = (id) => {
  return API.delete(`/candidates/${id}`);
};

export const updateCandidate = (id, data) => {
  return API.put(`/candidates/${id}`, data);
};
// =====================
// Jobs
// =====================

export const getJobs = () => {
  return API.get("/jobs");
};

export const createJob = (data) => {
  return API.post("/jobs", data);
};

export const getJobById = (id) => {
  return API.get(`/jobs/${id}`);
};

export const deleteJob = (id) => {
  return API.delete(`/jobs/${id}`);
};


// =====================
// Matching
// =====================

export const matchCandidates = (jobId) => {
  return API.get(`/matching/${jobId}`);
};

export const getCVUrl = (file) => {
  return `http://localhost:5000/${file}`;
};
API.interceptors.response.use(
  (response) => response,

  (error) => {
    console.error("API ERROR:", error.response?.data || error.message);

    return Promise.reject(error);
  },
);

// =====================
// AI Matching
// =====================

export const getJobMatches = (jobId) => {
  return API.get(`/matching/${jobId}`);
};

export const runJobMatching = (jobId) => {
  return API.post(`/matching/${jobId}`);
};
// =====================
// Dashboard
// =====================

export const getDashboardStats = () => {
  return API.get("/dashboard");
};

export const updateJob = (id, data) => {
  return API.put(`/jobs/${id}`, data);
};
// =====================
// Notification
// =====================
export const getNotifications = () => {
  return API.get("/notifications");
};
export default API;
