import axios from "axios";

const api = axios.create({
  baseURL: "https://happy-rodrigodsluz.herokuapp.com",
});

export default api;
