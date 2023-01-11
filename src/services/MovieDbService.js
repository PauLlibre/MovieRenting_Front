import axios from "axios";
import MoviesList from "../Components/MoviesList";

export const MovieDbService = {};

const apiKey = "cbd75f1c3e93985e760d1bdd211ec791";

MovieDbService.getAllMovies = async () => {
  let response = await axios.get(`http://localhost:3000/movies`);
  console.log(response);
  return response.data.data;
};

MovieDbService.getImages = async (url) => {
  let response = await axios.get(`https://image.tmdb.org/t/p/w342/${url}`);

  return response;
};
