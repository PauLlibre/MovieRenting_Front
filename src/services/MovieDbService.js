import axios from "axios";
import MoviesList from "../Components/MoviesList";

export const MovieDbService = {};

const apiKey = "cbd75f1c3e93985e760d1bdd211ec791";

MovieDbService.getAllMovies = async () => {
  let response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );
  return response.data.results;
};

MovieDbService.getImages = async (url) => {
  let response = await axios.get(`https://image.tmdb.org/t/p/w342/${url}`);

  return response;
};
