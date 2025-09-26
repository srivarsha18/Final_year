import axios from "axios";

// Replace with your backend URL
const API = axios.create({
  baseURL: "http://localhost:5000/api", 
});

export const loginUser = (email, password) =>
  API.post("/auth/login", { email, password });

export const fetchTests = () => API.get("/tests");
export const fetchFacultyData = () => API.get("/faculty/dashboard");
