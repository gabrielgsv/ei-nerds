import axios from "axios";

import { API_TOKEN, API_URL } from "./env";

const api = axios.create({
  headers: {
    accept: "application/json",
    Authorization: API_TOKEN,
  },
  baseURL: API_URL,
});

export default api;
