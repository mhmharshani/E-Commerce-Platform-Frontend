import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080"
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    const publicEndpoints = ["/auth", "/product", "/category"];

    const isPublic = publicEndpoints.some(url =>
        config.url.includes(url)
    );

    if (token && !isPublic) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

axiosClient.interceptors.response.use(
    (response) => response,

    (error) => {

        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default axiosClient

