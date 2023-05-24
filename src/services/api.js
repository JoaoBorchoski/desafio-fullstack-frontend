import axios from "axios";

export const Api = axios.create({
    baseURL: "https://desafio-fullstack-backend-kbbg.onrender.com",
    timeout: 5000,
});
