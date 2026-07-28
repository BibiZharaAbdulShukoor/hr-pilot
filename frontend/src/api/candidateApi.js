import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getCandidates = () => {
  return API.get("/candidates");
};

export const getCandidateById = (id) => {
  return API.get(`/candidates/${id}`);
};
