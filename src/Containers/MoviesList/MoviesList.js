import React, { useRef } from "react";
import MovieCard from "../../Components/MoviesCard/MovieCard";
import "./MovieList.scss";
import { MovieDbService } from "../../services/MovieDbService";
import { useState, useEffect } from "react";
import RentedMovieService from "../../services/RentedMovieService";
import RecommendedMovie from "../../Components/RecommendedMovie/RecommendedMovie";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [rentedmovies, setRentedMovies] = useState([]);

  const { user_id, role } = JSON.parse(localStorage.getItem("user"));
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
      setRentedMovies(result.rented_movies);
    } catch (error) {
      console.log(error);
    }
  };
  const movieListElement = document.querySelector(".movies-list-animation");
  useEffect(() => {
    setTimeout(() => {
      if (movieListElement) {
        movieListElement.classList.add("movies-list-animation");
      }
    }, 0);
    return () => {
      if (movieListElement) {
        movieListElement.classList.remove("movies-list-animation");
      }
    };
  }, []);

  const movieList = movies.map((movie) => {
    return (
      <MovieCard
        title={movie.title}
        key={movie.id}
        id={movie.id}
        image={movie.poster_path}
        price={Math.floor(Math.random() * 10).toFixed(2)}
        update={getAllRentedMovies}
        backdropPath={movie.backdrop_path}
        user_role={role}
      />
    );
  });

  const RentedMovieList = rentedmovies.map((movie) => {
    return (
      <MovieCard
        title={movie.title}
        key={movie.id}
        id={movie.id}
        image={movie.poster_path}
        price={Math.floor(Math.random() * 10).toFixed(2)}
        backdropPath={movie.backdrop_path}
      />
    );
  });

  return (
    <div>
      <div className="h3-animation">
        {movies.length ? (
          <RecommendedMovie movie={movies} />
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <h3 className="h3-animation">Rent</h3>
      <div className="movies-list movies-list-animation">{movieList}</div>
      <h3 className="h3-animation">Available</h3>
      <div className="movies-list movies-list-animation">{RentedMovieList}</div>
    </div>
  );
}
