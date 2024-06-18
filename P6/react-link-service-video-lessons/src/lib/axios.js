import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  withCredentials: true,
});

instance.interceptors.response.use(res => res, async (error) => {
  const originalRequest = error.config;
  if (error.response?.status === 401 && !originalRequest._retry) {
    await instance.post('/auth/token/refresh', undefined, { _retry: true });
    originalRequest._retry = true;
    return instance(originalRequest);
  }
  return Promise.reject(error);
});

export default instance;
