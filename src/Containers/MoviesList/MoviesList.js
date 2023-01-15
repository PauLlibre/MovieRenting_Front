import React from "react";
import MovieCard from "../../Components/MoviesCard/MovieCard";
import "./MovieList.scss";
import { MovieDbService } from "../../services/MovieDbService";
import { useState, useEffect } from "react";
import RentedMovieService from "../../services/RentedMovieService";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [rentedmovies, setRentedMovies] = useState([]);

  const { user_id } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getAllMovies();
    getAllRentedMovies();
  }, []);

  const getAllMovies = async () => {
    try {
      const result = await MovieDbService.getAllMovies();
      setMovies(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllRentedMovies = async () => {
    try {
      const result = await RentedMovieService.getAllMovies(user_id);
      console.log(result);
      setRentedMovies(result.rented_movies);
    } catch (error) {
      console.log(error);
    }
  };

  const movieList = movies.map((movie) => {
    return (
      <MovieCard
        title={movie.title}
        key={movie.id}
        id={movie.id}
        image={movie.poster_path}
        price={Math.floor(Math.random() * 10).toFixed(2)}
        update={getAllRentedMovies}
      />
    );
  });
  console.log(rentedmovies);
  console.log(rentedmovies[0]);
  const RentedMovieList = rentedmovies.map((movie) => {
    return (
      <MovieCard
        title={movie.title}
        key={movie.id}
        id={movie.id}
        image={movie.poster_path}
        price={Math.floor(Math.random() * 10).toFixed(2)}
      />
    );
  });

  return (
    <div>
      <h3>Rent</h3>
      <div className="movies-list">{movieList}</div>
      <h3>Available</h3>
      <div className="movies-list">{RentedMovieList}</div>
    </div>
  );
}
