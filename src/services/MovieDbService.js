import axios from "axios";
import MoviesList from "../Containers/MoviesList/MoviesList";

export const MovieDbService = {};

const apiKey = "cbd75f1c3e93985e760d1bdd211ec791";

MovieDbService.getAllMovies = async () => {
  let response = await axios.get(`http://localhost:3000/movies`);

  return response.data.data;
};

MovieDbService.getImages = async (url) => {
  let response = await axios.get(`https://image.tmdb.org/t/p/w342/${url}`);

  return response;
};

MovieDbService.getById = async (id) => {
  let response = await axios.get(`http://localhost:3000/movies/${id}`);

  return response.data.results;
};
