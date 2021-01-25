import axios from 'axios'

export function request(config) {
  const instace = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    // timeout: 5000
  })
  instace.interceptors.request.use(config => {
    return config;
  })
  instace.interceptors.response.use(res => {
    return res.data;
  })
  return instace(config);
}

