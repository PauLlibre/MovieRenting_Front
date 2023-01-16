import React from "react";
import "./MovieCard.scss";
import { useState } from "react";
import { useNavigate } from "react-router";
import RentedMovieService from "../../services/RentedMovieService";

export default function MovieCard({
  title,
  image,
  price,
  id,
  update,
  userId,
  backdropPath,
  user_role,
}) {
  let source = `https://image.tmdb.org/t/p/w185/${image}`;

  const navigate = useNavigate();

  const { user_id } = JSON.parse(localStorage.getItem("user"));

  const user = userId || user_id;

  const details = {
    id,
    title,
    image,
    backdrop_path: backdropPath,
    user_role,
  };

  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
    setTitulo(title);
    if (price == 0) {
      setPrecio("Free");
    } else {
      setPrecio(price + "€");
    }
  };

  const handleMouseOut = () => {
    setHover(false);
    setTitulo("");
    setPrecio("");
  };

  const handleDetails = async (id) => {
    navigate(`/movies/${id}`);
  };

  const handleRent = async (details) => {
    await RentedMovieService.rentMovie(details, user);
    update(details);
  };

  const handleDelete = async (id) => {
    await RentedMovieService.deleteRentedMovie(id, user);
    update(details);
  };

  const buttons = () => {
    console.log(user_role);
    if (update && hover) {
      return (
        <div className="buttons">
          <button
            onClick={() => {
              handleRent(details);
            }}
          >
            +
          </button>
          {user_role == "admin" ? (
            <button onClick={() => handleDelete(id)}>-</button>
          ) : null}
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
      className="movie h3-animation"
    >
      <div className="titulo">{titulo}</div>
      <div className="price">{precio}</div>
      {buttons()}
      <img
        className="poster"
        src={source}
        alt=""
        onClick={() => handleDetails(id)}
      />
    </div>
  );
}
