import React, { useEffect } from "react";
import MoviesList from "./Components/MoviesList";
import { MovieDbService } from "./services/MovieDbService";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import "./App.scss";

export default function App() {
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

  return (
    <div className="root">
      <NavBar />
      <MoviesList movies={movies} />
    </div>
  );
}
