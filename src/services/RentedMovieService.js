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
  });
};

RentedMovieService.deleteRentedMovie = async (id, user) => {
  console.log(user);
  return await axios.post(authApiUrl + `/${id}/${user}`);
};

RentedMovieService.getAllMovies = async (id) => {
  let data = await axios.get(authApiUrl + `/${id}`);
  console.log(data);
  data = data.data.data[0];
  console.log(data);

  return data;
};

export default RentedMovieService;
