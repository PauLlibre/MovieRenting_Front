import React from "react";
import "./MovieCard.scss";
import { useState } from "react";
import { useNavigate } from "react-router";
import RentedMovieService from "../../services/RentedMovieService";

export default function MovieCard({ title, image, price, id }) {
  let source = `https://image.tmdb.org/t/p/w185/${image}`;

  const navigate = useNavigate();

  const details = {
    id,
    title,
  };

  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");

  const handleMouseOver = () => {
    setTitulo(title);
    if (price == 0) {
      setPrecio("Free");
    } else {
      setPrecio(price + "€");
    }
  };

  const handleMouseOut = () => {
    setTitulo("");
    setPrecio("");
  };

  const handleDetails = async (id) => {
    navigate(`/movies/${id}`);
  };

  const handleRent = (details) => {
    RentedMovieService.rentMovie(details);
  };

  const handleDelete = (id) => {
    RentedMovieService.deleteRentedMovie(id);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="movie"
    >
      <div className="titulo">{titulo}</div>
      <div className="price">{precio}</div>
      <button
        onClick={() => {
          handleRent(details);
        }}
      >
        +
      </button>
      <button onClick={() => handleDelete(id)}>-</button>
      <img src={source} alt="" onClick={() => handleDetails(id)} />
    </div>
  );
}
