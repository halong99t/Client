const axios = require("axios").default;

const axiosConfig = axios.create({
  baseURL: "http://localhost:3333",
  headers: {},
});

export default axiosConfig;
