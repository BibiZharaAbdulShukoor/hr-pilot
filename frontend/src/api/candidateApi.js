import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getCandidates = () => {
  return API.get("/candidates");
};

export const getCandidateById = (id) => {
  return API.get(`/candidates/${id}`);
};
