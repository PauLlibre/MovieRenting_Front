import React from "react";
import "./RecommendedMovie.scss";

export default function RecommendedMovie({ movie }) {
  const uniqueMovie = movie[0];
  const url = "https://image.tmdb.org/t/p/w1280/" + uniqueMovie.backdrop_path;
  return (
    <div className="movie-poster">
      <h3 className="title">
        <span>Recommended</span> for you
      </h3>
      <div>
        <img src={url} alt="" />
        <div className="movie-info">
          <p>{uniqueMovie.title}</p>
          <p>{uniqueMovie.overview}</p>
        </div>
      </div>
    </div>
  );
}
