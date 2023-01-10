import React from "react";
import "./MovieCard.scss";
import { useState } from "react";

export default function MovieCard({ title, id, image, price }) {
  let source = `https://image.tmdb.org/t/p/w185/${image}`;

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

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      key={id}
      className="movie"
    >
      <div className="titulo">{titulo}</div>
      <div className="price">{precio}</div>
      <img src={source} alt="" />
    </div>
  );
}
