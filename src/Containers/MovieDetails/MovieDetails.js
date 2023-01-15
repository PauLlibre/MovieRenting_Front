import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieDbService } from "../../services/MovieDbService";
import "./MovieDetails.scss";
import RentedMovieService from "../../services/RentedMovieService";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const { user_id, user_role } = JSON.parse(localStorage.getItem("user"));

  const details = {
    id,
    title: movie.title,
    image: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    user_role,
  };

  const url = "https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path;

  useEffect(() => {
    MovieDbService.getById(id).then((res) => setMovie(res));
  }, []);
  console.log(movie);

  const handleRent = async () => {
    await RentedMovieService.rentMovie(details, user_id);
  };

  return (
    <div className="movie-details-root">
      <h1 className="movie-title-main">{movie.title}</h1>
      <div className="movie-details">
        <img src={url} alt="" />
        <div className="details">
          <ul>
            <li className="movie-title">
              <span>Overview: </span>
              {movie.overview}
            </li>
            <li className="movie-title">
              <span>Rating: </span>
              {movie.vote_average}/10
            </li>
            <li className="movie-title">
              <span>Release Date: </span>
              {movie.release_date}
            </li>
            <li className="movie-rent-button">
              <button onClick={handleRent}>RENT</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
