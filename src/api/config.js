import axios from 'axios';

const ACCESS_TOKEN = 'AIzaSyAsNLWPMVZGxJawit2hokoCCGe_h51LaGU';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/';
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = ACCESS_TOKEN;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  (config) => {
    config.url += `&key=${ACCESS_TOKEN}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
