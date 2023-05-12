import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie';
axios.defaults.headers = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGJjNGEwYzE3ODFmZTlmNGUyZDdiZGJjODZkNzhkMiIsInN1YiI6IjYzNTZkMWFjOTQ1ZDM2MDA4MjM4MjdmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sWCqTEJhgIbVs8uT0SD_DW3TD_cufF3xTdQONaQUU8M',
};

export const axiosById = id =>
  axios(`https://api.themoviedb.org/3/movie/${id}`).then(r => r.data);

export default axios;
