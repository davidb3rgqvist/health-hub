import axios from 'axios';

const api = axios.create({
  baseURL: 'https://healthhub-be-462e201f4989.herokuapp.com/',
});

export default api;
