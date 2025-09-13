import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // backend Django API URL
});

export const endpoints = {
  movies: "movies/",
  reviews: "reviews/",
  genres: "genres/",
};

export default API;
