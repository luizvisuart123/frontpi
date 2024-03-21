// services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Sua URL base da API
});

export default api;
