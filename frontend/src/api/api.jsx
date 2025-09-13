import axios from "axios";

const API = axios.create({
  baseURL: "https://movie-review-system-ze6r.onrender.com/api/", // backend Django API URL
});

export const endpoints = {
  movies: "movies/",
  reviews: "reviews/",
  genres: "genres/",
};

export default API;
