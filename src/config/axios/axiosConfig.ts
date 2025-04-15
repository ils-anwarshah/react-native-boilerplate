import axios from 'axios';
import {getLocalData} from '../../utils';

const api = axios.create({
  baseURL: 'http://localhost:3000', //SET THE BASE URL
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async config => {
    /** here we can get the local token available and set it into the axios headers config */
    const token = getLocalData('@USER_TOKEN');
    config.headers.Authorization = `${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;
