import axios from 'axios'

export function request(config) {
  const instace = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000
  })
  instace.interceptors.request.use(config => {
    return config;
  })
  instace.interceptors.response.use(res => {
    return res.data;
  })
  return instace(config);
}

