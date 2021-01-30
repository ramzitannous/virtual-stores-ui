import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// apiClient.interceptors.request.use(value => {});
