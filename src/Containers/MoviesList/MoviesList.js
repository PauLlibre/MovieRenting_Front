import React from "react";
import MovieCard from "../../Components/MoviesCard/MovieCard";
import "./MovieList.scss";
import { MovieDbService } from "../../services/MovieDbService";
import { useState, useEffect } from "react";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    try {
      const result = await MovieDbService.getAllMovies();
      setMovies(result);
    } catch (error) {
      console.log(error);
    }
  };

  const movieList = movies.map((movie) => {
    console.log(movie.poster_path);
    return (
      <MovieCard
        title={movie.title}
        key={movie.id}
        image={movie.poster_path}
        price={Math.floor(Math.random() * 10).toFixed(2)}
      />
    );
  });

  return (
    <div>
      <h3>Rent</h3>
      <div className="movies-list">{movieList}</div>
    </div>
  );
}
