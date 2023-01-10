import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.scss";

export default function MoviesList({ movies }) {
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
      <h3>Popular Movies</h3>
      <div className="movies-list">{movieList}</div>
    </div>
  );
}
