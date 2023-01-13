import axios from "axios";

const RentedMovieService = {};

const authApiUrl = "http://localhost:3000/rentedmovies";

RentedMovieService.rentMovie = async (details) => {
  return await axios.post(authApiUrl, {
    id: details.id,
    title: details.title,
  });
};

RentedMovieService.deleteRentedMovie = async (id) => {
  return await axios.post(authApiUrl + `/${id}`);
};

export default RentedMovieService;
