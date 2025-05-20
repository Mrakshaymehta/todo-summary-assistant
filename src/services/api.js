import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",  // ✅ MUST match your backend port
});

export default instance;