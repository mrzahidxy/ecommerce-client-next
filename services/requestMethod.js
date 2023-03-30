import axios from "axios";

const BASE_URL = "https://ecommerce-mern-api.vercel.app/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
