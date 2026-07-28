import axios from "axios";


const API = axios.create({

  baseURL: import.meta.env.VITE_API_URL,

});


// Register

export const registerUser = (data) => {

  return API.post("/auth/register", data);

};


// Login

export const loginUser = (data) => {

  return API.post("/auth/login", data);

};



export default API;