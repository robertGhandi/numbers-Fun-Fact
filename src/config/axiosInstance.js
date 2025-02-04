import axios from "axios";

const axiosInstance = axios.create({
  timeout: 3000,
  headers: { Connection: "keep-alive" },
});

export default axiosInstance;
