import axios, {AxiosInstance} from "axios";
import { useTokenStore } from "./store/useTokenStore";

const axiosClient: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  }
});

axiosClient.interceptors.request.use(
    (config) => {
        const token = useTokenStore().token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;