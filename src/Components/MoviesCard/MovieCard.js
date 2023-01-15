import React from "react";
import "./MovieCard.scss";
import { useState } from "react";
import { useNavigate } from "react-router";
import RentedMovieService from "../../services/RentedMovieService";

export default function MovieCard({ title, image, price, id, update, userId }) {
  let source = `https://image.tmdb.org/t/p/w185/${image}`;

  const navigate = useNavigate();

  const { user_id } = JSON.parse(localStorage.getItem("user"));

  console.log(userId);
  const user = userId || user_id;
  console.log(user);

  const details = {
    id,
    title,
    image,
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

  const handleRent = async (details) => {
    await RentedMovieService.rentMovie(details, user);
    update();
  };

  const handleDelete = async (id) => {
    await RentedMovieService.deleteRentedMovie(id, user);
    update();
  };

  const buttons = () => {
    if (update) {
      return (
        <div>
          <button
            onClick={() => {
              handleRent(details);
            }}
          >
            +
          </button>
          <button onClick={() => handleDelete(id)}>-</button>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="movie"
    >
      <div className="titulo">{titulo}</div>
      <div className="price">{precio}</div>
      {buttons()}
      <img src={source} alt="" onClick={() => handleDetails(id)} />
    </div>
  );
}
