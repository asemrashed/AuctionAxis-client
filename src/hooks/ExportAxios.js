import axios from "axios";

export const ExportAxios = axios.create({
  baseURL: import.meta.env.VITE_API_LINK,
});

// Attach interceptor globally (runs immediately)
ExportAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

ExportAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err?.response?.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token"); // optional
    }
    return Promise.reject(err);
  }
);
