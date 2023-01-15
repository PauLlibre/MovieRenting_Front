import axios from "axios";

const RentedMovieService = {};

const authApiUrl = "http://localhost:3000/rentedmovies";

RentedMovieService.rentMovie = async (details, user) => {
  console.log(user);
  return await axios.post(authApiUrl, {
    id: details.id,
    title: details.title,
    user_id: user,
    poster_path: details.image,
    backdrop_path: details.backdrop_path,
  });
};

RentedMovieService.deleteRentedMovie = async (id, user) => {
  return await axios.post(authApiUrl + `/${id}/${user}`);
};

RentedMovieService.getAllMovies = async (id) => {
  let data = await axios.get(authApiUrl + `/${id}`);
  data = data.data.data[0];

  return data;
};

export default RentedMovieService;
