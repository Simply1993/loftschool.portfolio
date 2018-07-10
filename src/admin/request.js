import axios from "axios";
import helpers from "./helpers";

axios.defaults.baseURL = "http://webdev-api.loftschool.com";
axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

axios.interceptors.response.use(
  response => {
    console.log("response in interceptor", response);
    return response;
  },
  error => {
    const ttl = parseInt(localStorage.getItem("ttl"));
    const DateNow = Math.floor(Date.now() / 1000);
    const originalRequest = error.config;
    if (DateNow > ttl && error.response.status === 401) {
      axios.post("/refreshToken").then(response => {
        if (response.status === 200) {
          helpers.setTokenTtl(response);
          axios.defaults.headers[
            "Authorization"
          ] = `Bearer ${localStorage.getItem("token")}`;
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${localStorage.getItem("token")}`;

          return axios(originalRequest);
        }
      });
    }

    return Promise.reject(error);
  }
);

export default axios;
