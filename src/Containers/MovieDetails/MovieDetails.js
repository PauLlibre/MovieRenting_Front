import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieDbService } from "../../services/MovieDbService";
import "./MovieDetails.scss";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    MovieDbService.getById(id).then((res) => setMovie(res));
  }, []);

  return <div className="movie-details">{movie.title}</div>;
}
