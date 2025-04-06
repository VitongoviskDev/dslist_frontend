import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dslist-aula.onrender.com',
});

export default api;